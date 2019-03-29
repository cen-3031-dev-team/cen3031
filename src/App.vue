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
        </ul>
    </nav><br />

    <transition name="fade">
        <router-view></router-view>
    </transition>

    <button class="btn btn-primary" @click="getTweets">Click me to get tweets!</button>

    <div v-if="hasTweets">
        Woah, there are tweets now! Cool.

        <ul>
            <li v-for="tweet in tweets.statuses"> {{ tweet.possibly_sensitive }} </li>
        </ul>
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
    },

    mounted()
    {
        // ...
    },

    methods: 
    {
        // ...
        getTweets()
        {
            const self = this

            // @TODO: make this go to the api correctly
            this.$http.get('//localhost:4000/twitter/getTweets').then(function (response)
            {
                if (response.status == "200")
                {
                    console.log(response)

                    self.tweets = response.data
                }
          })
        },
    }
}
</script>