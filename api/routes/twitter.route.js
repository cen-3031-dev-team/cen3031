const express = require('express')
const twitterRoutes = express.Router()
var Twit = require('twit')
require('dotenv').config()

// Defined get data(index or listing) route
twitterRoutes.route('/getTweets').get(function (req, res)
{
    var T = new Twit({
        consumer_key:         process.env.CONSUMER_KEY,
        consumer_secret:      process.env.CONSUMER_SECRET,
        access_token:         process.env.ACCESS_TOKEN,
        access_token_secret:  process.env.ACCESS_TOKEN_SECRET,
        timeout_ms:           60 * 1000,  // optional HTTP request timeout to apply to all requests.
        strictSSL:            true,     // optional - requires SSL certificates to be valid.
    })

    // search twitter for all tweets containing the word 'banana' since 2019-03-25
    T.get(
        'search/tweets',
        { q: 'banana since:2019-03-25', count: 10 },
        function(err, data, response)
        {
            console.log(data)

            res.status(200).json(data)
        }
    )
})

module.exports = twitterRoutes