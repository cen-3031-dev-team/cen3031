<template>
<div class="container">
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul class="navbar-nav">
            <li class ="nav-item">
              <router-link to="/" class="nav-link"> Home Page </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/posts" class="nav-link">Posts</router-link>
            </li>
        </ul>
    </nav><br />

    <transition name="fade">
        <router-view></router-view>
    </transition>

    <h1>Login</h1>

    <div class="row">
        <div class="col-xs-6">
            <a @click="showLogin">Log in</a>
        </div>

        <div class="col-xs-6">
            <a @click="showRegister">Register</a>
        </div>
    </div>
    <form @submit.prevent="validateAccount">
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                  <label>Email:</label>
                  <input type="text" class="form-control" v-model="account.email">
              </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label>Password:</label>
                    <input type="password" class="form-control" v-model="account.password">
                </div>
            </div>
        </div>

        <div class="row" v-show="displayRegister">
            <div class="col-md-6">
                <div class="form-group">
                    <label>Confirm password:</label>
                    <input type="password" class="form-control" v-model="account.confirmPassword">
                </div>
            </div>
        </div>

        <div class="form-group">
            <button class="btn btn-primary">Login</button>
        </div>
    </form>
</div>
</template>

<style>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
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
        }
    },

    computed:
    {
        hasTweets()
        {
            return this.tweets != null
        },

        safeTweets()
        {
            if (this.hasTweets)
            {
                return this._.filter(this.tweets.statuses, function(tweet) {
                    return tweet.possibly_sensitive == true
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
        // ...
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
