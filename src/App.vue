<template>
<div class="container">
    <nav class="navbar navbar-expand-sm navbar-light" style="background-color: #1da1f3;">
        <ul class="navbar-nav">
            <li class ="nav-item">
              <router-link to="/" style="color:#ffffff" class="nav-link"> Sign In </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/posts" style="color:#ffffff" class="nav-link">Posts</router-link>
            </li>
        </ul>
    </nav><br />

    <transition name="fade">
        <router-view></router-view>
    </transition>
<div align=center>
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
    /* making it so we can change all the headers to the same font */
    .headers{
        margin-top:5%;
        font-size:45px;
        font-family:cursive;
    }
    .forms{
        margin-top:5%;
        margin: auto;
        border-width: medium;
        border: 1px dashed #000;
        padding: 10px;
        width:60%;
    }
    .form-control{
        margin-left: 50%;
    }
    .form-text{
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
