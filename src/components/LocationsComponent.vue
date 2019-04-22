<template>
<div class="tweet-container">
    <div class="container">
        <div class="row">
            <div v-for="location in locations"
                class="col-md-3"
                :key="location.id">
                <div class="row location-topic">
                    <p class="col-md-12">
                        {{ location.name }}
                    </p>

                    <p class="col-md-12 tag">
                        Count: {{ location.tweet_volume }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style>
.location-topic {
    margin-bottom: 10px;
    width: 100%;
    display: flex;
    padding: 10px;
    margin: 10px 5px;
    align-items: center;
    color: black;
    background-color: lightblue;
    border-radius: 15px;
}

.location-topic * {
    padding: 0;
    margin: 0;
}

.location-topic .tag {
    display: block;
}
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
