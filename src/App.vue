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

  <div class="row">
    <div class="col-lg-12">
      <h4>
        Display the
        <div>
          <multiselect v-model="querytweets" :options="numOfTweets" :searchable="false" :close-on-select="false" :show-labels="false" placeholder="# Tweets"></multiselect>
          <pre class="language-json"><code>{{ querytweets  }}</code></pre>
        </div>
        most popular Tweets about
        <div>
        <input type="text" placeholder="Search..">
        <pre class="language-json"><code>{{ querystring  }}</code></pre>
        </div>
        in the last
        <div>
          <multiselect v-model="querydays" :options="numOfDays" :searchable="false" :close-on-select="false" :show-labels="false" placeholder="# of Days"></multiselect>
          <pre class="language-json"><code>{{ querydays  }}</code></pre>
        </div>
        Days
      </h4>
    </div>
  </div></br>

  <div class="row">
    <div class="col-lg-12" id='searchButton'>
      <button class="btn btn-primary" @click="getTweets">Search For Tweets!</button>
      </br>
    </div>
  </div>

  <div v-if="hasTweets">
    </br>
    <ul>
      <li v-for="tweet in tweets.statuses">
        <div class="tweet">
          <img :src="tweet.user.profile_image_url">
          <span> @{{ tweet.user.screen_name }}: {{ tweet.text }} </br></span>
          <span> Likes: {{tweet.favorite_count}} Retweets: {{tweet.retweet_count}}</span>
          </br>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>

<style src="vue-multiselect/dist/vue-multiselect.min.css">
</style><style>.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

body {
  background-color: #333;
  font-family: helvetica, sans-serif;
}

h4 {
  text-align: center;
  color: black;
}

.searchButton {
  text-align: center;
}

.tweet {
  margin-bottom: 10px;
  border: 10px;
  border-color: lightblue;
  width: 100%;
  display: flex;
  height: 100px;
  align-items: center;
  color: black;
  background-color: lightblue;
}

.tweet h5 {
  display: grid;
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
export default {
  mixins: [],

  props: {
    // ...
  },

  data() {
    return {
      tweets: null,
      querydays: null,
      querytweets: null,
      querystring: null,
      numOfDays: ['1', '2', '3', '4','5','6','7'],
      numOfTweets: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20']
    }
  },

  computed: {
    hasTweets() {
      return this.tweets != null
    },
  },

  mounted() {

  },

  methods: {
    // ...
    getTweets() {
      const self = this
      self.tweets = null

      // @TODO: make this go to the api correctly
      this.$http.get('//localhost:4000/twitter/searchTweets').then(function(response) {
        if (response.status == "200") {
          console.log(response)

          self.tweets = response.data
        }
      })
    },
  }
}
</script>
