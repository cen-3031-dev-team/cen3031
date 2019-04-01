<template>
<div class="container">
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul class="navbar-nav">
            <li class="nav-item">
                <router-link to="/login" class="nav-link">Login</router-link>
            </li>

            <li class="nav-item">
                <router-link to="/create" class="nav-link">Make Account</router-link>
            </li>

            <li class="nav-item">
                <router-link to="/posts" class="nav-link">Posts</router-link>
            </li>

            <li class="nav-item">
                <router-link to="/graphs" class="nav-link">Graphs</router-link>
            </li>
        </ul>
    </nav>

    <transition name="fade">
        <router-view></router-view>
    </transition>

    <graph
        :tweets="safeTweets"
    ></graph>

    <div class="row">
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
            <input type="text" placeholder="Search..">
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

    <div class="row">
        <div class="col-lg-12" id='searchtext'>
            <button class="btn btn-primary" @click="getTweets">Search For Tweets!</button>
        </div>
    </div>

    <div>
        <h1 class="headers">Login</h1>

        <div class="row">
            <ul style ="margin-left:20%; margin-bottom:1%;" class="nav">
                <li class="nav-item">
                    <button class="btn btn-outline-primary mr-1 waves-effect">
                        <a @click="showLogin">Log in</a>
                    </button>
                </li>

                <li class="nav-item">
                    <button class="btn btn-outline-primary mr-1 waves-effect">
                        <a @click="showRegister">Register</a>
                    </button>
                </li>
            </ul>
        </div>
    </div>

    <div>
        <form class="forms" @submit.prevent="validateAccount">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-text">Email:</label>
                        <input type="text" class="form-control" v-model="account.email">
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-text">Password:</label>
                        <input type="password" class="form-control" v-model="account.password">
                    </div>
                </div>
            </div>

            <div class="row" v-show="displayRegister">
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-text">Confirm password:</label>
                        <input type="password" class="form-control" v-model="account.confirmPassword">
                    </div>
                </div>
            </div>

            <div class="form-group">
                <button style="margin-left:62%;" class="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>

    <div v-if="hasTweets">
        <div class="row" v-for="tweet in tweets.statuses">
            <div class="tweet">
                <img :src="tweet.user.profile_image_url">
                <span> @{{ tweet.user.screen_name }}: {{ tweet.full_text }} </span>
            </div>

            <span id="tweetleft"> Likes: {{tweet.favorite_count}} Retweets: {{tweet.retweet_count}}</span>
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

#searchtext {
  text-align: center;
  font-size: 20px;
}
#searchbutton {
  text-align: center;
}
#tweetrow {
  margin-bottom: 10px;
  background-color: lightblue;
}

.tweet {
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  height: 100px;
  align-items: center;
  color: black;
  background-color: lightblue;
}

.name {
  color: black;
  font-weight: bold;
}

.tag {
  color: grey;
}

.tweet img {
  width: 80px;
  margin-left: 10px;
  border-radius: 50%;
  padding-right: 10px;
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

            querydays: null,
            querytweets: null,
            querystring: null,
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
                    return tweet.possibly_sensitive === false
                })
            }
            else
            {
                return null
            }
        },
    },

    mounted()
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

        validateAccount()
        {
            let uri = 'http://localhost:4000/accounts/validate'

            this.axios.post(uri, this.account).then(() => {
                this.$router.push({name: 'account'})
            })
        },
    }
}
</script>
