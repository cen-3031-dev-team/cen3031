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
    <div class="col-md-2" id="searchtext">
      Display the
    </div>
    <div class="col-md-1">
      <multiselect v-model="querytweets" :options="numOfTweets" :searchable="false" :close-on-select="true" :show-labels="false" placeholder="#"></multiselect>
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
      <multiselect v-model="querydays" :options="numOfDays" :searchable="false" :close-on-select="true" :show-labels="false" placeholder="#"></multiselect>
    </div>
    <div class="col-md-2" id="searchtext">
      Days
    </div>
  </div></br>

  <div class="row">
    <div class="col-lg-12" id='searchtext'>
      <button class="btn btn-primary" @click="getTweets">Search For Tweets!</button>
      </br>
    </div>
  </div>

  <div v-if="hasTweets">
    </br>
    <ul>
      <li v-for="tweet in tweets.statuses">
        <div class="row">
          <div class="tweet">
            <img :src="tweet.user.profile_image_url">
            <span> @{{ tweet.user.screen_name }}: {{ tweet.text }} </br></span>
          </div>
        </div>
        <div class="row">
          <span id="tweetleft"> Likes: {{tweet.favorite_count}} Retweets: {{tweet.retweet_count}}</span>
        </div>
      </br>
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

#searchtext {
  text-align: center;
  font-size: 20px;
}
#searchbutton{
  text-align: center;
}
#tweetrow{
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
      numOfDays: ['1', '2', '3', '4', '5', '6', '7'],
      numOfTweets: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
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
          self.tweets = response.data
        }
      })
    },
  }
}
</script>
