<template>
<div class="container">
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul class="navbar-nav">
            <!-- <li class="nav-item">
                <router-link to="/login" class="nav-link">Login</router-link>
            </li>

            <li class="nav-item">
                <router-link to="/create" class="nav-link">Make Account</router-link>
            </li> -->
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
</div>
    <!-- <div id="fullscreen_bg" class="fullscreen_bg"/> -->
        <div id="regContainer" class="container">
            <div class="row">
                <div class="col-md-6 col-md-offset-3">
                    <div class ="panel panel login">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xs-6">
                                    <a href="#" id="register-form-link">Register</a>
                                </div>
                            </div>
                            <hr>
                        </div>

                        <div class ="panel-body">
                            <div class="row">
                                <div class="col-lg-12">
                                    <form id="login-form" action="#" method="post" role="form" style="display:block;">
                                        <div class="form-group">
                                            <label for="email">Email</label>
                                            <input type="text" name ="email" id="email" tabindex="1" class="form-control" placeholder="Email" value="">
                                        </div>
                                        <div class="form-group">
                                            <label for="password">Password</label>
                                            <input type="password" name="password" id="password" tabindex="2" class="form-control" placeholder="Password">
                                        </div>
                                        <div class="form-group text-center">
                                            <input type="checkbox" tabindex="3" class="" name="remember" id="remember">
                                            <label for="remember">Remember Me</label>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-sm-6 col-sm-offset-3">
                                                    <input type="submit" name="login-submit" id="login-submit" tabindex="4" class="form-control btn btn-login" value="Log In">
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <form id="register-form" action="#" method="post" role="form" style="display: none;">
                                        <div class="form-group">
                                            <label for="email">Email</label>
                                            <input type="text" name="email" id="email"tabindex="1" class="form-control" placeholder="Email" value="">
                                        </div>
                                        <div class="form-group">
                                            <label for="password">Password</label>
                                            <input type="password" name="password" id="password" tabindex="2" class="form-control" placeholder="Password">
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-sm-6 col-sm-offset-3"?
                                                    <input type="submit" name="register-submit" id="register-submit" tabindex="4" class="form-control btn btn-register" value="Register Now">
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>





    <!-- <button class="btn btn-primary" @click="getTweets">Click me to get tweets!</button>

    <div v-if="hasTweets">
        Woah, there are tweets now! Cool.

        <ul>
            <li v-for="tweet in safeTweets" :key="tweet.id">
                {{ tweet.text }}
            </li>
        </ul>
    </div> -->


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
            tweets: null,
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
    }
}
</script>
