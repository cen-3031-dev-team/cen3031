<template>
<div class="tweet-container">
    <div class="container">
        <div class="row">
            <div v-for="trend in trends"
                class="col-md-3"
                :key="trend.id">
                <div class="row trends-topic">
                    <p>
                        {{ trend.name }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style>
.trends-topic {
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

.trends-topic * {
    padding: 0;
    margin: 0;
}

.trends-topic .tag {
    display: block;
}
</style>

<script>
export default {
    props: ['trends'],

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
