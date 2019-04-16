<template>
<div>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul class="navbar-nav">
            <li class="nav-item">
                <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/login" class="nav-link">Login</router-link>
            </li>
        </ul>
    </nav>


    <div class="container-fluid">
        <transition name="fade">
            <router-view></router-view>
        </transition>

        <div class="row text-center py-3">
            <div class="col">
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
                <button class="btn btn-primary" @click="getTweets">Search For Tweets!</button>
            </div>
        </div>

        <div class="row py-3">
            <div class="col-lg-6">
                <tweets-list v-if="hasTweets"
                    :tweets="safeTweets"
                ></tweets-list>
            </div>

            <div class="col-lg-6">
                <graph
                    :tweets="safeTweets"
                ></graph>
            </div>
        </div>
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
            account:            {},
            displayLogin:       true,
            displayRegister:    false,

            queryDays:          5,
            queryCount:         5,
            queryString:        'banana',
            numOfDays:          ['1', '2', '3', '4', '5', '6', '7'],
            numOfTweets:        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
        }
    },

    computed:
    {
        hasTweets()
        {
            return this.tweets !== null
        },

        safeTweets()
        {
            if (this.hasTweets)
            {
                return this._.filter(this.tweets.statuses, function(tweet) {
                    return tweet.possibly_sensitive === false || tweet.possibly_sensitive === undefined
                })
            }
            else
            {
                return null
            }
        },
    },

    created()
    {
        this.getTweets()
    },

    methods:
    {
        getTweets()
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
                    self.tweets = response.data
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
    }
}
</script>
