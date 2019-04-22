<template>
<div>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul class="navbar-nav">
            <li class="nav-item">
                <span @click.prevent="" class="nav-link">
                    {{ navMessage }}
                </span>
            </li>
            <li v-if="isLoggedIn" class="nav-item">
                <span @click.prevent="logOut" class="nav-link">
                    Log out
                </span>
            </li>
        </ul>
    </nav>

    <div class="container text-center pt-4 pb-2">
        <div class="row">
            <div class="col">
            <h1>Twitter Analytics</h1>
        </div>
        </div>
    </div>

    <div v-show="isLoggedIn">
        <div class="container text-center">
            <div class="row">
                <div class="col">
                    Search for tweets by
                    <multiselect
                        v-model="queryType"
                        :options="typeOptions"
                        :searchable="false"
                        :close-on-select="true"
                        :show-labels="false"
                        :allow-empty="false"
                    ></multiselect>
                </div>
            </div>
            <div class="row py-3">
                <div v-show="isLocationSearch" class="col">
                    Display the tweets from

                    <input type="text" v-model="queryString" placeholder="Search for a location..">
                </div>

                <div v-show="isTopicSearch" class="col">
                    Display the

                    <multiselect
                        v-model="queryCount"
                        :options="numOfTweets"
                        :searchable="false"
                        :close-on-select="true"
                        :show-labels="false"
                        placeholder="#"
                    ></multiselect>

                    most popular Tweets about

                    <input type="text" v-model="queryString" placeholder="Search..">

                    in the last

                    <multiselect
                        v-model="queryDays"
                        :options="numOfDays"
                        :searchable="false"
                        :close-on-select="true"
                        :show-labels="false"
                        placeholder="#"
                    ></multiselect>

                    Days
                </div>

                <div class="w-100"></div>

                <div class="col mt-3">
                    <button class="btn btn-primary" @click="getTweets">
                        {{ searchMessage }}
                    </button>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col" v-if="displayTweets">
                    <tweets-list v-if="hasTweets"
                        :tweets="tweets"
                    ></tweets-list>

                    <div v-else class="text-center">
                        <i class="fa fa-circle-notch fa-spin"></i> Loading tweets...
                    </div>
                </div>

                <div v-if="displayLocations"
                    class="col"
                >
                    <locations v-if="hasLocations"
                        :locations="locations"
                    >
                    </locations>

                    <div v-else class="text-center">
                        <i class="fa fa-circle-notch fa-spin"></i> Loading trending topics...
                    </div>
                </div>
            </div>

            <div class="row py-3">
                <div class="col-md-6">
                    <graph
                        type="bar"
                        title="Individual Tweet Comparison"
                        yAxisTitle="Count"
                        :tweets="tweets"
                        graphId="numTweetsGraoh"
                        class="mb-5"
                    ></graph>
                </div>

                <div class="col-md-6">
                    <graph
                        type="line"
                        :title="lineGraphTitle"
                        yAxisTitle="Frequency"
                        :tweets="tweets"
                        graphId="tweetFrequencyGraph"
                    ></graph>
                </div>
            </div>
        </div>
    </div>

    <div v-show=" ! isLoggedIn ">
        <login
            @loggedIn="loggedIn"
        >
        </login>
    </div>
</div>
</template>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s
}

.multiselect {
    display: inline-block;
    width: auto;
}

.multiselect__option--highlight {
    background-color: lightblue;
}
.multiselect__option--selected.multiselect__option--highlight {
    background-color: blue;
}

.queryFilters * {
    display: inline-block;
}
</style>

<script>
export default
{
    mixins: [],

    props:
    {
        // ...
    },

    data()
    {
        return {
            tweets:             null,
            locations:          [],
            account:            { email: null, },
            displayLogin:       true,
            displayRegister:    false,
            displayTweets:      true,
            displayLocations:   false,

            queryDays:          5,
            queryCount:         5,
            queryString:        'banana',
            queryType:          'Topic',

            typeOptions:        ['Location', 'Topic'],
            numOfDays:          ['1', '2', '3', '4', '5', '6', '7'],
            numOfTweets:        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
        }
    },

    computed:
    {
        isLoggedIn()
        {
            return this.account.email !== null
        },

        navMessage()
        {
            return this.isLoggedIn
                ? 'Logged in as ' + this.account.email
                : 'Not logged in'
        },

        hasTweets()
        {
            return this.tweets !== null
        },

        hasLocations()
        {
            return this.locations.length > 0
        },

        lineGraphTitle()
        {
            return 'Tweets Over the Past ' + this.queryDays + ' Days'
        },

        isLocationSearch()
        {
            return this.queryType === 'Location'
        },

        isTopicSearch()
        {
            return this.queryType === 'Topic'
        },

        searchMessage()
        {
            return this.isTopicSearch
                ? 'Search for tweets!'
                : 'Search for trending topics from this location!'
        },
    },

    created()
    {
        this.getTweets()
    },

    watch:
    {
        queryType()
        {
            this.queryString = (this.isLocationSearch)
                ? 'San Francisco'
                : 'Banana'
        },

        'account.email'()
        {
            this.isLoggedIn = (this.account.email && this.account.email !== null)
        },
    },

    methods:
    {
        getTweets()
        {
            if (this.isLocationSearch)
            {
                this.getLocation()

                this.displayLocations   = true
                this.displayTweets      = false
            }

            if (this.isTopicSearch)
            {
                this.getTopic()

                this.displayLocations   = false
                this.displayTweets      = true
            }
        },

        getLocation()
        {
            const self = this
            self.locationsRes = null

            let options = {
                params: {
                    queryString: self.queryString,
                }
            }
            this.$http.get('/twitter/trendingTweets', options).then(function (response)
            {
                if (response.status == "200")
                {
                    self.locations = response.data[0].trends
                }
          })
        },

        getTopic()
        {
            const self = this
            self.tweets = null

            let options = {
                params: {
                    since: self.queryDays,
                    queryString: self.queryString,
                    count: self.queryCount,
                }
            }
            this.$http.get('/twitter/searchTweets', options).then(function (response)
            {
                if (response.status == "200")
                {
                    self.tweets = response.data.statuses
                }
          })
        },

        showLogin()
        {
            this.displayLogin = true
            this.displayRegister = false
        },

        showRegister()
        {
            this.displayLogin = false
            this.displayRegister = true
        },

        loggedIn(email)
        {
            this.account.email = email
        },

        logOut()
        {
            this.account.email = null
        },
    }
}
</script>
