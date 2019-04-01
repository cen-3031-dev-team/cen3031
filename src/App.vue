<template>
<div class="container-fluid">
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

    <transition name="fade">
        <router-view></router-view>
    </transition>

    <div class="container">
        <div class="row py-3">
            <div class="col-md-2" id="searchtext">
                Display the
            </div>

            <div class="col-md-1">
                <multiselect
                    v-model="querytweets"
                    :options="numOfTweets"
                    :searchable="false"
                    :close-on-select="true"
                    :show-labels="false"
                    placeholder="#"
                ></multiselect>
            </div>
            <div class="col-md-2" id="searchtext">
                most popular Tweets about
            </div>
            <div class="col-md-2">
                <input type="text" v-model="querystring" placeholder="Search..">
            </div>
            <div class="col-md-2" id="searchtext">
                in the last
            </div>
            <div class="col-md-1">
                <multiselect
                    v-model="querydays"
                    :options="numOfDays"
                    :searchable="false"
                    :close-on-select="true"
                    :show-labels="false"
                    placeholder="#"
                ></multiselect>
            </div>
            <div class="col-md-2" id="searchtext">
                Days
            </div>
        </div>

        <div class="row py-3">
            <div class="col-md-12" id='searchtext'>
                <button class="btn btn-primary" @click="getTweets">Search For Tweets!</button>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row py-3">
            <div class="col-md-6">
                <tweets-list v-if="hasTweets"
                    :tweets="safeTweets"
                ></tweets-list>
            </div>

            <div class="col-md-6">
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

/* making it so we can change all the headers to the same font */
.headers {
    margin-top:5%;
    font-size:45px;
}
.forms {
    margin-top:5%;
    margin: auto;
    border-width: medium;
    border: 1px dashed #000;
    padding: 10px;
    width:60%;
}
.form-control {
    margin-left: 50%;
}
.form-text {
    margin-left:50%;
    font-size:18px;
    font-family:inherit;
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
            tweets:         null,
            account:        {},
            displayLogin:   true,
            displayRegister:false,

            querydays: 5,
            querytweets: 10,
            querystring: 'banana',
            numOfDays: ['1', '2', '3', '4', '5', '6', '7'],
            numOfTweets: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
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
                return _.filter(this.tweets.statuses, function(tweet) {
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

            // @TODO: make this go to the api correctly
            this.$http.get('//localhost:4000/twitter/searchTweets').then(function (response)
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
