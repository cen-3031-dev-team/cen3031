const express = require('express')
const twitterRoutes = express.Router()
const moment = require('moment')
var Twit = require('twit')
var http = require('http')
var request = require('request')
require('dotenv').config()

twitterRoutes.route('/trendingTweets').get(function(req, res)
{
    var T = new Twit({
        consumer_key:         process.env.CONSUMER_KEY,
        consumer_secret:      process.env.CONSUMER_SECRET,
        access_token:         process.env.ACCESS_TOKEN,
        access_token_secret:  process.env.ACCESS_TOKEN_SECRET,
        timeout_ms:           60 * 1000,  // optional HTTP request timeout
        strictSSL:            false,     // optional - requires valid SSL certificates
    })

    let options = {
        
    }
    T.get(
        'trends/available',
        options,
        function(err, data, response)
        {
            let sent = false;
            for (var i = 0; i < data.length; i++)
            {
                if (data[i].name.toUpperCase() == req.query.queryString.toUpperCase())
                {
                    let options = {
                        id: data[i].woeid
                    }
            
                T.get(
                    'trends/place',
                    options,
                    function(err, data, response)
                    {
                        if(err)
                            res.status(400)
                        else{
                            res.status(200).json(data);
                        }
                    }
                )
                sent = true;

                }
                if(sent)
                {
                    break;
                }
            }
            if(!sent)
            {
                res.status(200).send("No Location Found");
            }
        }
    )
    
    
})

// Defined get data(index or listing) route
twitterRoutes.route('/searchTweets').get(function (req, res)
{
    var T = new Twit({
        consumer_key:         process.env.CONSUMER_KEY,
        consumer_secret:      process.env.CONSUMER_SECRET,
        access_token:         process.env.ACCESS_TOKEN,
        access_token_secret:  process.env.ACCESS_TOKEN_SECRET,
        timeout_ms:           60 * 1000,  // optional HTTP request timeout
        strictSSL:            false,     // optional - requires valid SSL certificates
    })
    
    //Create q parameter
    var query = req.query.queryString + " since:" +  moment().subtract(req.query.since, 'days').format('YYYY-MM-DD')
                + " -filter:retweets"

    let options = {
        q: query,
        count: parseInt(req.query.count),
        tweet_mode: "extended",
        result_type: "popular"
    }

    T.get(
        'search/tweets',
        options,
        function(err, data, response)
        {
            res.status(200).json(data)
        }
    )
})

module.exports = twitterRoutes
