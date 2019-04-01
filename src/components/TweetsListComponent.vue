<template>
<div>
    <div class="row" v-for="tweet in tweets">
        <div class="tweet">
            <img :src="tweet.user.profile_image_url">
            <span> @{{ tweet.user.screen_name }}: {{ tweet.full_text }} </span>
        </div>

        <span id="tweetleft"> Likes: {{tweet.favorite_count}} Retweets: {{tweet.retweet_count}}</span>
    </div>
</div>
</template>

<style>
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
export default {
    props: 
    {
        tweets:
        {
            default: [],
        },
    },

    data() {
        return {
            // ...
        }
    },

    methods: {
        // ...
    }
}
</script>