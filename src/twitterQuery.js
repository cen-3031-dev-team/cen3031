var Twit = require('twit')

var T = new Twit({
  consumer_key:         'HuqVv9FNmhRG7fQMPwtBWrg45',
  consumer_secret:      'rLPustGxPKMvECfONOhPwzXxkm0Sk7dpp0CJYbWoFUUhhVP15C',
  access_token:         '1107723146671603714-LlHomr4D7EVQRlTGfixICpWwXB30Mk',
  access_token_secret:  '6pF7Y9efjdHoSq7h57OJtFxBC0b5j1nBvJSKWnSQM66cs',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})

//
//  search twitter for all tweets containing the word 'banana' since July 11, 2011
//
T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response) {
  console.log(data)
})

//
// get `funny` twitter users
//
T.get('users/suggestions/:slug', { slug: 'funny' }, function (err, data, response) {
  console.log(data)

//
//  filter the twitter public stream by the word 'mango'.
//
var stream = T.stream('statuses/filter', { track: 'mango' })

stream.on('tweet', function (tweet) {
  console.log(tweet)
})

//
// filter the public stream by the latitude/longitude bounded box of San Francisco
//
var sanFrancisco = [ '-122.75', '36.8', '-121.75', '37.8' ]

var stream = T.stream('statuses/filter', { locations: sanFrancisco })

stream.on('tweet', function (tweet) {
  console.log(tweet)
})

//
// filter the public stream by english tweets containing `#apple`
//
var stream = T.stream('statuses/filter', { track: '#apple', language: 'en' })

stream.on('tweet', function (tweet) {
  console.log(tweet)
})
