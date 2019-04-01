<template>
<div class="tweet-container">
    <div class="tweet" v-for="tweet in tweets">
        <div class="col-md-12">
            <img :src="tweet.user.profile_image_url">
            <span> @{{ tweet.user.screen_name }}: {{ tweet.full_text }} </span>
        </div>

        <div class="col-md-12 tag">
            Likes: {{tweet.favorite_count}} Retweets: {{tweet.retweet_count}}
        </div>
    </div>
</div>
</template>

<style>
.tweet-container {
    max-height: 600px;
    overflow-y: scroll;
}

.tweet {
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  align-items: center;
  color: black;
  background-color: lightblue;
  border-radius: 15px;
}

.tweet img {
  width: 80px;
  margin-left: 10px;
  border-radius: 50%;
  padding-right: 10px;
}

.tweet .counts {
    display: block;
}

.name {
  color: black;
  font-weight: bold;
}

.tag {
  color: grey;
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