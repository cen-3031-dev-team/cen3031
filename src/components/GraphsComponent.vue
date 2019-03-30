
<template>

  <div id="container" style="min-width: 310px; height: 400px; margin: 0 auto">
  </div>
    
</template>

<script>
import Highcharts from 'highcharts'
    export default {

        data()
        {
            return
            {
                tweets: null
            }
        },

        created()
        {

        },

        mounted()
        {
            this.getData()

            this.setupGraph()
        },

        // query, count, since
        // /twitter/searchTweets

        methods:
        {
            getData()
            {
                const self = this
                self.tweets = null


                // create json to request

                // send request to the API

                // @TODO: make this go to the api correctly and get data back

                this.$http.get('//localhost:4000/twitter/searchTweets').then(function (response)
                {
                    if (response.status == "200")
                    {
                        self.tweets = response.data
                    }
                })
            },

            setupGraph()
            {
                const self = this

                Highcharts.chart('container', {

                    chart: {
                        scrollablePlotArea: {
                            minWidth: 700
                        }
                    },

                    data: self.data,

                    title: {
                        text: 'Daily Twitter metrics for x'
                    },

                    subtitle: {
                        text: 'Source: www.twitter.com'
                    },

                    xAxis: {
                        tickInterval: 24 * 3600 * 1000, // one day
                        tickWidth: 0,
                        gridLineWidth: 1,
                        labels: {
                            align: 'left',
                            x: 3,
                            y: -3
                        }
                    },

                    yAxis: [{ // left y axis
                        title: {
                            text: null
                        },
                        labels: {
                            align: 'left',
                            x: 3,
                            y: 16,
                            format: '{value:.,0f}'
                        },
                        showFirstLabel: false
                    }, { // right y axis
                        linkedTo: 0,
                        gridLineWidth: 0,
                        opposite: true,
                        title: {
                            text: null
                        },
                        labels: {
                            align: 'right',
                            x: -3,
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
                        series: {
                            cursor: 'pointer',
                            point: {
                                /* events: {
                                    click: function (e) {
                                         hs.htmlExpand(null, {
                                            pageOrigin: {
                                                x: e.pageX || e.clientX,
                                                y: e.pageY || e.clientY
                                            },
                                            headingText: this.series.name,
                                            maincontentText: Highcharts.dateFormat('%A, %b %e, %Y', this.x) + ':<br/> ' +
                                                this.y + ' sessions',
                                            width: 200
                                        }); 
                                    }
                                } */
                            }, 
                            marker: {
                                lineWidth: 1
                            }
                        }
                    },

                    series: [{
                        name: 'All sessions',
                        lineWidth: 4,
                        marker: {
                            radius: 4
                        }
                    }, {
                        name: 'New users'
                    }]
                });
            },
        },
    }
</script>