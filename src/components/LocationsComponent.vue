<template>
<div class="tweet-container">
    <div class="tweet container" v-for="location in locations" :key="location.id">
        <div class="row">
            <div class="col-md-12">
                <span>
                    {{ location.name }}
                </span>
            </div>

            <div class="col-md-12 tag">
                Count: {{ location.tweet_volume }}
            </div>
        </div>
    </div>
</div>
</template>

<style>

</style>

<script>
export default {
    props: ['locations'],

    data() {
        return {
            // ...
        }
    },

    computed:
    {
        // ...
    },

    methods: {
        // ...
    }
}
</script>
