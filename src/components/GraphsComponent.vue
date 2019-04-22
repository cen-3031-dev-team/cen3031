<style>
    .graphContainer {
        min-width: 300px;
        max-width: 600px;
        height: 400px;
        margin: 0 auto;
    }
</style>

<template>
    <div :id="graphId" class="graphContainer"></div>
</template>

<script src = "https://code.highcharts.com/modules/data.js"></script>
<script>
import Highcharts from 'highcharts'
import moment from 'moment'

export default {
    props:
    {
        type:
        {
            required: true,
            type: String,
        },
        title:
        {
            required: true,
            type: String,
        },
        subtitle:
        {
            type: String,
            default: null,
        },
        yAxisTitle:
        {
            Type: String,
            default: null,
        },
        tweets:
        {
            default: [],
        },
        graphId:
        {
            type: String,
            default: 'graphContainer',
        },
    },

    data()
    {
        return {
            graphData: [],
        }
    },

    computed:
    {
        isLineGraph()
        {
            return this.type === 'line'
        },

        isBarGraph()
        {
            return this.type === 'bar'
        },

        categories()
        {
            return this.isBarGraph
                ? this._.map(this.tweets, 'user.screen_name')
                : null
        }
    },

    watch:
    {
        tweets()
        {
            this.getDataForGraph()
        },

        graphData()
        {
            if (this.isLineGraph) this.setupLineGraph()

            if (this.isBarGraph) this.setupBarGraph()
        },
    },

    created()
    {
        // ...
    },

    mounted()
    {
        // ...
    },


    methods:
    {
        getDataForGraph()
        {
            const self = this

            if (this.isLineGraph)
            {
                // this.graphData = this._.map(this.tweets, 'created_at')
                let moments = this._.map(this.tweets, function(tweet)
                {
                    return moment(tweet.created_at)
                })

                let daysAgo = this._.groupBy(moments, function(tweet)
                {
                    return moment().diff(moment(tweet), 'days')
                })

                let tweetsPerDay = []
                for (let i = 0; i < 7; i++)
                {
                    tweetsPerDay.push(
                        (typeof daysAgo[i] !== 'undefined')
                            ? daysAgo[i].length
                            : 0
                    )
                }

                self.graphData = [{
                    name: 'Tweets per day',
                    data: tweetsPerDay,
                }]
            }

            if (this.isBarGraph)
            {
                let likesArray = []
                let retweetsArray = []

                this._.forEach(self.tweets, function(tweet) {
                    likesArray.push(tweet.favorite_count)
                    retweetsArray.push(tweet.retweet_count)
                })

                this.graphData = [
                    {
                        name: 'Favorites',
                        data: likesArray
                    },
                    {
                        name: 'Retweets',
                        data: retweetsArray
                    }
                ]
            }
        },

        setupLineGraph()
        {
            const self = this

            Highcharts.chart(this.graphId, {
                title: {
                    text: self.title
                },

                subtitle: {
                    text: self.subtitle
                },

                xAxis: {
                    categories: [0, 1, 2, 3, 4, 5, 6],
                    title: {
                        text: '# Days Ago Tweeted'
                    }
                },

                yAxis: {
                    title: {
                        text: self.yAxisTitle
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle'
                },

                plotOptions: {
                    series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: 0
                    }
                },

                series: self.graphData,

                responsive: {
                    rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                        }
                    }
                    }]
                }
            })
        },

        setupBarGraph()
        {

            const self = this

            Highcharts.chart(this.graphId, {
                chart: {
                    type: self.type
                },
                title: {
                    text: self.title
                },

                subtitle: {
                    text: self.subtitle
                },

                xAxis: {
                    categories: self.categories,
                    title: {
                        text: 'User'
                    }
                },

                yAxis: {
                    title: {
                        text: self.yAxisTitle
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle'
                },

                // plotOptions: self.plotOptions,

                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle'
                },

                series: self.graphData,

                responsive: {
                    rules: [{
                        condition: {
                            maxWidth: 500
                        },
                        chartOptions: {
                            legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                            }
                        }
                    }]
                }
            })
        },
    },
}
</script>
