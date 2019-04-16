<style>
    #graphContainer {
        min-width: 300px;
        height: 400px;
        margin: 0 auto;
    }
</style>

<template>
    <div id="graphContainer"></div> 
</template>

<script src = "https://code.highcharts.com/modules/data.js"></script>
<script>
import Highcharts from 'highcharts'

export default {
    props: 
    {
        tweets:
        {
            default: [],
        },
    },

    data()
    {
        return {
            // ...
        }
    },

    created()
    {

    },

    mounted()
    {
        this.setupGraph()
    },

    methods:
    {
        setupGraph()
        {

            const self = this

            Highcharts.chart('graphContainer', {

                chart: {
                    scrollablePlotArea: {
                        minWidth: 700
                    }
                },

                title: {
                    text: 'Daily Twitter metrics for _ over _ days'
                },

                subtitle: {
                    text: 'Source: www.twitter.com'
                },

                xAxis: {
                    type: 'datetime',
                    title: {
                        text: 'Past _ days'
                    },
                    tickInterval: 24 * 3600 * 1000, // one day
                    tickWidth: 0,
                    gridLineWidth: 1,
                    labels: {
                        align: 'left',
                        x: 3,
                        y: -3
                    }
                },

                yAxis: [{ 
                    title: {
                        text: 'Number of tweets, likes, retweets'
                    },
                    labels: {
                        align: 'left',
                        x: 3,
                        y: 16,
                        format: '{value:.,0f}'
                    },
                    showFirstLabel: false
                  
                }],

                legend: {
                    align: 'left',
                    verticalAlign: 'top',
                    borderWidth: 0
                },

                tooltip: {
                    shared: true,
                    crosshairs: true
                },

                plotOptions: {
                    lineWidth: 4,
                    marker: {
                        radius: 4
                    }
                },

                series: [{
                    name: 'Tweets',
                    data: [
                        [Date.UTC(2019, 1, 1), 39],
                        [Date.UTC(2019, 1, 2), 71],
                        [Date.UTC(2019, 1, 3), 106]
                    ]
                }, {
                    name: 'Likes',
                    color: '#FF0000',
                    data: [
                        [Date.UTC(2019, 1, 1), 22],
                        [Date.UTC(2019, 1, 2), 30],
                        [Date.UTC(2019, 1, 3), 25]
                    ]
                }, {
                    name: 'Retweets',
                    color: 'green',
                    data: [
                        [Date.UTC(2019, 1, 1), 14],
                        [Date.UTC(2019, 1, 2), 45],
                        [Date.UTC(2019, 1, 3), 2]
                    ]
                }]
            })
        },
    },
}
</script>
