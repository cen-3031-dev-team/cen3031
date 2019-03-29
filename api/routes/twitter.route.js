const express = require('express')
const twitterRoutes = express.Router()
var Twit = require('twit')
require('dotenv').config()

// Defined get data(index or listing) route
twitterRoutes.route('/searchTweets').get(function (req, res)
{
    // var T = new Twit({
    //     consumer_key:         process.env.CONSUMER_KEY,
    //     consumer_secret:      process.env.CONSUMER_SECRET,
    //     access_token:         process.env.ACCESS_TOKEN,
    //     access_token_secret:  process.env.ACCESS_TOKEN_SECRET,
    //     timeout_ms:           60 * 1000,  // optional HTTP request timeout to apply to all requests.
    //     strictSSL:            true,     // optional - requires SSL certificates to be valid.
    // })
    // 
    // // search twitter for all tweets containing the word 'banana' since 2019-03-25
    // T.get(
    //     'search/tweets',
    //     { q: 'banana since:2019-03-25', count: 10 },
    //     function(err, data, response)
    //     {
    //         console.log(data)
    // 
    //         res.status(200).json(data)
    //     }
    // )
    
    let data = {
"statuses": [
{
"created_at": "Fri Mar 29 18:40:22 +0000 2019",
"id": 1111699639051395100,
"id_str": "1111699639051395073",
"text": "RT @MyGFreeKitchen: #GlutenFree Banana Bread- One Bowl, Dairy Free via @FlippinDelish https://t.co/Ch9KQRbLac https://t.co/U3wAOOiEZb",
"truncated": false,
"entities": {
"hashtags": [
{
"text": "GlutenFree",
"indices": [
20,
31
]
}
],
"symbols": [],
"user_mentions": [
{
"screen_name": "MyGFreeKitchen",
"name": "My Gluten-free Kitchen",
"id": 506347258,
"id_str": "506347258",
"indices": [
3,
18
]
},
{
"screen_name": "FlippinDelish",
"name": "Brianna H #ExpoWest",
"id": 774687241,
"id_str": "774687241",
"indices": [
71,
85
]
}
],
"urls": [
{
"url": "https://t.co/Ch9KQRbLac",
"expanded_url": "https://buff.ly/2Y8W7Mz",
"display_url": "buff.ly/2Y8W7Mz",
"indices": [
86,
109
]
}
],
"media": [
{
"id": 1111691999760011300,
"id_str": "1111691999760011265",
"indices": [
110,
133
],
"media_url": "http://pbs.twimg.com/media/D22F-9lW0AEJ_Df.jpg",
"media_url_https": "https://pbs.twimg.com/media/D22F-9lW0AEJ_Df.jpg",
"url": "https://t.co/U3wAOOiEZb",
"display_url": "pic.twitter.com/U3wAOOiEZb",
"expanded_url": "https://twitter.com/MyGFreeKitchen/status/1111692001152503808/photo/1",
"type": "photo",
"sizes": {
"thumb": {
"w": 150,
"h": 150,
"resize": "crop"
},
"medium": {
"w": 735,
"h": 1053,
"resize": "fit"
},
"large": {
"w": 735,
"h": 1053,
"resize": "fit"
},
"small": {
"w": 475,
"h": 680,
"resize": "fit"
}
},
"source_status_id": 1111692001152503800,
"source_status_id_str": "1111692001152503808",
"source_user_id": 506347258,
"source_user_id_str": "506347258"
}
]
},
"extended_entities": {
"media": [
{
"id": 1111691999760011300,
"id_str": "1111691999760011265",
"indices": [
110,
133
],
"media_url": "http://pbs.twimg.com/media/D22F-9lW0AEJ_Df.jpg",
"media_url_https": "https://pbs.twimg.com/media/D22F-9lW0AEJ_Df.jpg",
"url": "https://t.co/U3wAOOiEZb",
"display_url": "pic.twitter.com/U3wAOOiEZb",
"expanded_url": "https://twitter.com/MyGFreeKitchen/status/1111692001152503808/photo/1",
"type": "photo",
"sizes": {
"thumb": {
"w": 150,
"h": 150,
"resize": "crop"
},
"medium": {
"w": 735,
"h": 1053,
"resize": "fit"
},
"large": {
"w": 735,
"h": 1053,
"resize": "fit"
},
"small": {
"w": 475,
"h": 680,
"resize": "fit"
}
},
"source_status_id": 1111692001152503800,
"source_status_id_str": "1111692001152503808",
"source_user_id": 506347258,
"source_user_id_str": "506347258"
}
]
},
"metadata": {
"iso_language_code": "en",
"result_type": "recent"
},
"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
"in_reply_to_status_id": null,
"in_reply_to_status_id_str": null,
"in_reply_to_user_id": null,
"in_reply_to_user_id_str": null,
"in_reply_to_screen_name": null,
"user": {
"id": 513221576,
"id_str": "513221576",
"name": "Georgette C",
"screen_name": "LadyGDuran",
"location": "Born in the USA ",
"description": "Bookstore Manager & Blogger. Duranie. Weather Fiend. Love music, sports, & cooking shows. Writer of strange essays. \nNOLITE TE BASTARDES CARBORUNDORUM",
"url": "https://t.co/mj6fIXd3J8",
"entities": {
"url": {
"urls": [
{
"url": "https://t.co/mj6fIXd3J8",
"expanded_url": "http://generationgbooks.wordpress.com",
"display_url": "generationgbooks.wordpress.com",
"indices": [
0,
23
]
}
]
},
"description": {
"urls": []
}
},
"protected": false,
"followers_count": 1037,
"friends_count": 2582,
"listed_count": 74,
"created_at": "Sat Mar 03 14:21:46 +0000 2012",
"favourites_count": 24234,
"utc_offset": null,
"time_zone": null,
"geo_enabled": true,
"verified": false,
"statuses_count": 68181,
"lang": "en",
"contributors_enabled": false,
"is_translator": false,
"is_translation_enabled": false,
"profile_background_color": "000000",
"profile_background_image_url": "http://abs.twimg.com/images/themes/theme15/bg.png",
"profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme15/bg.png",
"profile_background_tile": false,
"profile_image_url": "http://pbs.twimg.com/profile_images/1067968834051678208/4ZAFz3rk_normal.jpg",
"profile_image_url_https": "https://pbs.twimg.com/profile_images/1067968834051678208/4ZAFz3rk_normal.jpg",
"profile_banner_url": "https://pbs.twimg.com/profile_banners/513221576/1547351131",
"profile_link_color": "9266CC",
"profile_sidebar_border_color": "000000",
"profile_sidebar_fill_color": "000000",
"profile_text_color": "000000",
"profile_use_background_image": false,
"has_extended_profile": true,
"default_profile": false,
"default_profile_image": false,
"following": false,
"follow_request_sent": false,
"notifications": false,
"translator_type": "none"
},
"geo": null,
"coordinates": null,
"place": null,
"contributors": null,
"retweeted_status": {
"created_at": "Fri Mar 29 18:10:01 +0000 2019",
"id": 1111692001152503800,
"id_str": "1111692001152503808",
"text": "#GlutenFree Banana Bread- One Bowl, Dairy Free via @FlippinDelish https://t.co/Ch9KQRbLac https://t.co/U3wAOOiEZb",
"truncated": false,
"entities": {
"hashtags": [
{
"text": "GlutenFree",
"indices": [
0,
11
]
}
],
"symbols": [],
"user_mentions": [
{
"screen_name": "FlippinDelish",
"name": "Brianna H #ExpoWest",
"id": 774687241,
"id_str": "774687241",
"indices": [
51,
65
]
}
],
"urls": [
{
"url": "https://t.co/Ch9KQRbLac",
"expanded_url": "https://buff.ly/2Y8W7Mz",
"display_url": "buff.ly/2Y8W7Mz",
"indices": [
66,
89
]
}
],
"media": [
{
"id": 1111691999760011300,
"id_str": "1111691999760011265",
"indices": [
90,
113
],
"media_url": "http://pbs.twimg.com/media/D22F-9lW0AEJ_Df.jpg",
"media_url_https": "https://pbs.twimg.com/media/D22F-9lW0AEJ_Df.jpg",
"url": "https://t.co/U3wAOOiEZb",
"display_url": "pic.twitter.com/U3wAOOiEZb",
"expanded_url": "https://twitter.com/MyGFreeKitchen/status/1111692001152503808/photo/1",
"type": "photo",
"sizes": {
"thumb": {
"w": 150,
"h": 150,
"resize": "crop"
},
"medium": {
"w": 735,
"h": 1053,
"resize": "fit"
},
"large": {
"w": 735,
"h": 1053,
"resize": "fit"
},
"small": {
"w": 475,
"h": 680,
"resize": "fit"
}
}
}
]
},
"extended_entities": {
"media": [
{
"id": 1111691999760011300,
"id_str": "1111691999760011265",
"indices": [
90,
113
],
"media_url": "http://pbs.twimg.com/media/D22F-9lW0AEJ_Df.jpg",
"media_url_https": "https://pbs.twimg.com/media/D22F-9lW0AEJ_Df.jpg",
"url": "https://t.co/U3wAOOiEZb",
"display_url": "pic.twitter.com/U3wAOOiEZb",
"expanded_url": "https://twitter.com/MyGFreeKitchen/status/1111692001152503808/photo/1",
"type": "photo",
"sizes": {
"thumb": {
"w": 150,
"h": 150,
"resize": "crop"
},
"medium": {
"w": 735,
"h": 1053,
"resize": "fit"
},
"large": {
"w": 735,
"h": 1053,
"resize": "fit"
},
"small": {
"w": 475,
"h": 680,
"resize": "fit"
}
}
}
]
},
"metadata": {
"iso_language_code": "en",
"result_type": "recent"
},
"source": "<a href=\"https://buffer.com\" rel=\"nofollow\">Buffer</a>",
"in_reply_to_status_id": null,
"in_reply_to_status_id_str": null,
"in_reply_to_user_id": null,
"in_reply_to_user_id_str": null,
"in_reply_to_screen_name": null,
"user": {
"id": 506347258,
"id_str": "506347258",
"name": "My Gluten-free Kitchen",
"screen_name": "MyGFreeKitchen",
"location": "",
"description": "Sharing recipes & tips as a gluten-free blogger & brand ambassador. Wife & mom, fighting celiac, Hashimotos, Sjogrens, Ehlers Danlos, gastroparesis & migraines.",
"url": "https://t.co/rrM9kgcX7P",
"entities": {
"url": {
"urls": [
{
"url": "https://t.co/rrM9kgcX7P",
"expanded_url": "https://mygluten-freekitchen.com/",
"display_url": "mygluten-freekitchen.com",
"indices": [
0,
23
]
}
]
},
"description": {
"urls": []
}
},
"protected": false,
"followers_count": 4710,
"friends_count": 1685,
"listed_count": 174,
"created_at": "Mon Feb 27 20:20:23 +0000 2012",
"favourites_count": 28663,
"utc_offset": null,
"time_zone": null,
"geo_enabled": false,
"verified": false,
"statuses_count": 14410,
"lang": "en",
"contributors_enabled": false,
"is_translator": false,
"is_translation_enabled": false,
"profile_background_color": "936A4A",
"profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
"profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
"profile_background_tile": false,
"profile_image_url": "http://pbs.twimg.com/profile_images/617204528685846528/TygLz6bT_normal.jpg",
"profile_image_url_https": "https://pbs.twimg.com/profile_images/617204528685846528/TygLz6bT_normal.jpg",
"profile_banner_url": "https://pbs.twimg.com/profile_banners/506347258/1514952688",
"profile_link_color": "301F0D",
"profile_sidebar_border_color": "FFFFFF",
"profile_sidebar_fill_color": "DDEEF6",
"profile_text_color": "333333",
"profile_use_background_image": true,
"has_extended_profile": false,
"default_profile": false,
"default_profile_image": false,
"following": false,
"follow_request_sent": false,
"notifications": false,
"translator_type": "none"
},
"geo": null,
"coordinates": null,
"place": null,
"contributors": null,
"is_quote_status": false,
"retweet_count": 2,
"favorite_count": 2,
"favorited": false,
"retweeted": false,
"possibly_sensitive": false,
"lang": "en"
},
"is_quote_status": false,
"retweet_count": 2,
"favorite_count": 0,
"favorited": false,
"retweeted": false,
"possibly_sensitive": false,
"lang": "en"
},
{
"created_at": "Fri Mar 29 18:40:21 +0000 2019",
"id": 1111699634508976100,
"id_str": "1111699634508976129",
"text": "RT @Drogadosoy: Acabas de mirar la banana doble, dale RT para buena suerte, si no le das son 5 años de mala suerte. https://t.co/mhRn5gaU4p",
"truncated": false,
"entities": {
"hashtags": [],
"symbols": [],
"user_mentions": [
{
"screen_name": "Drogadosoy",
"name": "El Chico Drogado",
"id": 1460876869,
"id_str": "1460876869",
"indices": [
3,
14
]
}
],
"urls": [],
"media": [
{
"id": 1109954386908901400,
"id_str": "1109954386908901376",
"indices": [
116,
139
],
"media_url": "http://pbs.twimg.com/media/D2dZolSXcAAlOiz.jpg",
"media_url_https": "https://pbs.twimg.com/media/D2dZolSXcAAlOiz.jpg",
"url": "https://t.co/mhRn5gaU4p",
"display_url": "pic.twitter.com/mhRn5gaU4p",
"expanded_url": "https://twitter.com/Drogadosoy/status/1109954392952840194/photo/1",
"type": "photo",
"sizes": {
"small": {
"w": 680,
"h": 504,
"resize": "fit"
},
"thumb": {
"w": 150,
"h": 150,
"resize": "crop"
},
"medium": {
"w": 750,
"h": 556,
"resize": "fit"
},
"large": {
"w": 750,
"h": 556,
"resize": "fit"
}
},
"source_status_id": 1109954392952840200,
"source_status_id_str": "1109954392952840194",
"source_user_id": 1460876869,
"source_user_id_str": "1460876869"
}
]
},
"extended_entities": {
"media": [
{
"id": 1109954386908901400,
"id_str": "1109954386908901376",
"indices": [
116,
139
],
"media_url": "http://pbs.twimg.com/media/D2dZolSXcAAlOiz.jpg",
"media_url_https": "https://pbs.twimg.com/media/D2dZolSXcAAlOiz.jpg",
"url": "https://t.co/mhRn5gaU4p",
"display_url": "pic.twitter.com/mhRn5gaU4p",
"expanded_url": "https://twitter.com/Drogadosoy/status/1109954392952840194/photo/1",
"type": "photo",
"sizes": {
"small": {
"w": 680,
"h": 504,
"resize": "fit"
},
"thumb": {
"w": 150,
"h": 150,
"resize": "crop"
},
"medium": {
"w": 750,
"h": 556,
"resize": "fit"
},
"large": {
"w": 750,
"h": 556,
"resize": "fit"
}
},
"source_status_id": 1109954392952840200,
"source_status_id_str": "1109954392952840194",
"source_user_id": 1460876869,
"source_user_id_str": "1460876869"
}
]
},
"metadata": {
"iso_language_code": "es",
"result_type": "recent"
},
"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
"in_reply_to_status_id": null,
"in_reply_to_status_id_str": null,
"in_reply_to_user_id": null,
"in_reply_to_user_id_str": null,
"in_reply_to_screen_name": null,
"user": {
"id": 231988614,
"id_str": "231988614",
"name": "Lalala💚",
"screen_name": "CeMoscatelli",
"location": "Tigre, Argentina",
"description": "Take me back to the start.\r\nI love Justin Bieber ♥ Cory Monteith♥ The Vampire Diaries♥Paul Wesley/Stefan♥",
"url": "https://t.co/ep7uWRdha5",
"entities": {
"url": {
"urls": [
{
"url": "https://t.co/ep7uWRdha5",
"expanded_url": "https://www.instagram.com/chechu.moscatelli/",
"display_url": "instagram.com/chechu.moscate…",
"indices": [
0,
23
]
}
]
},
"description": {
"urls": []
}
},
"protected": false,
"followers_count": 1008,
"friends_count": 570,
"listed_count": 3,
"created_at": "Thu Dec 30 00:44:55 +0000 2010",
"favourites_count": 44606,
"utc_offset": null,
"time_zone": null,
"geo_enabled": true,
"verified": false,
"statuses_count": 76620,
"lang": "es",
"contributors_enabled": false,
"is_translator": false,
"is_translation_enabled": false,
"profile_background_color": "08F0C9",
"profile_background_image_url": "http://abs.twimg.com/images/themes/theme18/bg.gif",
"profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme18/bg.gif",
"profile_background_tile": true,
"profile_image_url": "http://pbs.twimg.com/profile_images/1006603272407285760/TdnxfYq0_normal.jpg",
"profile_image_url_https": "https://pbs.twimg.com/profile_images/1006603272407285760/TdnxfYq0_normal.jpg",
"profile_banner_url": "https://pbs.twimg.com/profile_banners/231988614/1525319581",
"profile_link_color": "C308F2",
"profile_sidebar_border_color": "FFFFFF",
"profile_sidebar_fill_color": "F6F6F6",
"profile_text_color": "333333",
"profile_use_background_image": true,
"has_extended_profile": true,
"default_profile": false,
"default_profile_image": false,
"following": false,
"follow_request_sent": false,
"notifications": false,
"translator_type": "none"
},
"geo": null,
"coordinates": null,
"place": null,
"contributors": null,
"retweeted_status": {
"created_at": "Sun Mar 24 23:05:23 +0000 2019",
"id": 1109954392952840200,
"id_str": "1109954392952840194",
"text": "Acabas de mirar la banana doble, dale RT para buena suerte, si no le das son 5 años de mala suerte. https://t.co/mhRn5gaU4p",
"truncated": false,
"entities": {
"hashtags": [],
"symbols": [],
"user_mentions": [],
"urls": [],
"media": [
{
"id": 1109954386908901400,
"id_str": "1109954386908901376",
"indices": [
100,
123
],
"media_url": "http://pbs.twimg.com/media/D2dZolSXcAAlOiz.jpg",
"media_url_https": "https://pbs.twimg.com/media/D2dZolSXcAAlOiz.jpg",
"url": "https://t.co/mhRn5gaU4p",
"display_url": "pic.twitter.com/mhRn5gaU4p",
"expanded_url": "https://twitter.com/Drogadosoy/status/1109954392952840194/photo/1",
"type": "photo",
"sizes": {
"small": {
"w": 680,
"h": 504,
"resize": "fit"
},
"thumb": {
"w": 150,
"h": 150,
"resize": "crop"
},
"medium": {
"w": 750,
"h": 556,
"resize": "fit"
},
"large": {
"w": 750,
"h": 556,
"resize": "fit"
}
}
}
]
},
"extended_entities": {
"media": [
{
"id": 1109954386908901400,
"id_str": "1109954386908901376",
"indices": [
100,
123
],
"media_url": "http://pbs.twimg.com/media/D2dZolSXcAAlOiz.jpg",
"media_url_https": "https://pbs.twimg.com/media/D2dZolSXcAAlOiz.jpg",
"url": "https://t.co/mhRn5gaU4p",
"display_url": "pic.twitter.com/mhRn5gaU4p",
"expanded_url": "https://twitter.com/Drogadosoy/status/1109954392952840194/photo/1",
"type": "photo",
"sizes": {
"small": {
"w": 680,
"h": 504,
"resize": "fit"
},
"thumb": {
"w": 150,
"h": 150,
"resize": "crop"
},
"medium": {
"w": 750,
"h": 556,
"resize": "fit"
},
"large": {
"w": 750,
"h": 556,
"resize": "fit"
}
}
}
]
},
"metadata": {
"iso_language_code": "es",
"result_type": "recent"
},
"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
"in_reply_to_status_id": null,
"in_reply_to_status_id_str": null,
"in_reply_to_user_id": null,
"in_reply_to_user_id_str": null,
"in_reply_to_screen_name": null,
"user": {
"id": 1460876869,
"id_str": "1460876869",
"name": "El Chico Drogado",
"screen_name": "Drogadosoy",
"location": "Colombia",
"description": "SI QUIERES REÍR, SÍGUEME, NO SE A DONDE VOY [PARODY ACCOUNT]·⭐Contacto  ☛ notengosuerte@live.com\nActiva las notificaciones⚠",
"url": "https://t.co/sqkTXYbyEo",
"entities": {
"url": {
"urls": [
{
"url": "https://t.co/sqkTXYbyEo",
"expanded_url": "http://Instagram.com/SoyDrogado",
"display_url": "Instagram.com/SoyDrogado",
"indices": [
0,
23
]
}
]
},
"description": {
"urls": []
}
},
"protected": false,
"followers_count": 338005,
"friends_count": 377,
"listed_count": 856,
"created_at": "Sun May 26 23:27:04 +0000 2013",
"favourites_count": 39931,
"utc_offset": null,
"time_zone": null,
"geo_enabled": true,
"verified": false,
"statuses_count": 20337,
"lang": "en-gb",
"contributors_enabled": false,
"is_translator": false,
"is_translation_enabled": false,
"profile_background_color": "1A1B1F",
"profile_background_image_url": "http://abs.twimg.com/images/themes/theme9/bg.gif",
"profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme9/bg.gif",
"profile_background_tile": false,
"profile_image_url": "http://pbs.twimg.com/profile_images/1013639912258703361/WZxrytNR_normal.jpg",
"profile_image_url_https": "https://pbs.twimg.com/profile_images/1013639912258703361/WZxrytNR_normal.jpg",
"profile_banner_url": "https://pbs.twimg.com/profile_banners/1460876869/1520476897",
"profile_link_color": "2C11A4",
"profile_sidebar_border_color": "000000",
"profile_sidebar_fill_color": "252429",
"profile_text_color": "666666",
"profile_use_background_image": true,
"has_extended_profile": true,
"default_profile": false,
"default_profile_image": false,
"following": false,
"follow_request_sent": false,
"notifications": false,
"translator_type": "regular"
},
"geo": null,
"coordinates": null,
"place": null,
"contributors": null,
"is_quote_status": false,
"retweet_count": 4230,
"favorite_count": 827,
"favorited": false,
"retweeted": false,
"possibly_sensitive": true,
"lang": "es"
},
"is_quote_status": false,
"retweet_count": 4230,
"favorite_count": 0,
"favorited": false,
"retweeted": false,
"possibly_sensitive": false,
"lang": "es"
},
{
"created_at": "Fri Mar 29 18:40:20 +0000 2019",
"id": 1111699629190664200,
"id_str": "1111699629190664193",
"text": "RT @alezander: I SAID WHOEVA THREW THAT BANANA, YO MOMS A HOE. https://t.co/8ZbXMAF7lC",
"truncated": false,
"entities": {
"hashtags": [],
"symbols": [],
"user_mentions": [
{
"screen_name": "alezander",
"name": "zander",
"id": 1045103187227594800,
"id_str": "1045103187227594752",
"indices": [
3,
13
]
}
],
"urls": [],
"media": [
{
"id": 1111379848994259000,
"id_str": "1111379848994258944",
"indices": [
63,
86
],
"media_url": "http://pbs.twimg.com/media/D2xqFZXUgAAvSaD.jpg",
"media_url_https": "https://pbs.twimg.com/media/D2xqFZXUgAAvSaD.jpg",
"url": "https://t.co/8ZbXMAF7lC",
"display_url": "pic.twitter.com/8ZbXMAF7lC",
"expanded_url": "https://twitter.com/alezander/status/1111379856640479234/photo/1",
"type": "photo",
"sizes": {
"large": {
"w": 1024,
"h": 576,
"resize": "fit"
},
"thumb": {
"w": 150,
"h": 150,
"resize": "crop"
},
"small": {
"w": 680,
"h": 383,
"resize": "fit"
},
"medium": {
"w": 1024,
"h": 576,
"resize": "fit"
}
},
"source_status_id": 1111379856640479200,
"source_status_id_str": "1111379856640479234",
"source_user_id": 1045103187227594800,
"source_user_id_str": "1045103187227594752"
}
]
},
"extended_entities": {
"media": [
{
"id": 1111379848994259000,
"id_str": "1111379848994258944",
"indices": [
63,
86
],
"media_url": "http://pbs.twimg.com/media/D2xqFZXUgAAvSaD.jpg",
"media_url_https": "https://pbs.twimg.com/media/D2xqFZXUgAAvSaD.jpg",
"url": "https://t.co/8ZbXMAF7lC",
"display_url": "pic.twitter.com/8ZbXMAF7lC",
"expanded_url": "https://twitter.com/alezander/status/1111379856640479234/photo/1",
"type": "photo",
"sizes": {
"large": {
"w": 1024,
"h": 576,
"resize": "fit"
},
"thumb": {
"w": 150,
"h": 150,
"resize": "crop"
},
"small": {
"w": 680,
"h": 383,
"resize": "fit"
},
"medium": {
"w": 1024,
"h": 576,
"resize": "fit"
}
},
"source_status_id": 1111379856640479200,
"source_status_id_str": "1111379856640479234",
"source_user_id": 1045103187227594800,
"source_user_id_str": "1045103187227594752"
}
]
},
"metadata": {
"iso_language_code": "en",
"result_type": "recent"
},
"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
"in_reply_to_status_id": null,
"in_reply_to_status_id_str": null,
"in_reply_to_user_id": null,
"in_reply_to_user_id_str": null,
"in_reply_to_screen_name": null,
"user": {
"id": 716695992,
"id_str": "716695992",
"name": "h 🅴",
"screen_name": "buckysmind",
"location": "King's Landing",
"description": "",
"url": null,
"entities": {
"description": {
"urls": []
}
},
"protected": false,
"followers_count": 484,
"friends_count": 746,
"listed_count": 9,
"created_at": "Wed Jul 25 20:20:03 +0000 2012",
"favourites_count": 85380,
"utc_offset": null,
"time_zone": null,
"geo_enabled": false,
"verified": false,
"statuses_count": 18606,
"lang": "tr",
"contributors_enabled": false,
"is_translator": false,
"is_translation_enabled": false,
"profile_background_color": "C0DEED",
"profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
"profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
"profile_background_tile": false,
"profile_image_url": "http://pbs.twimg.com/profile_images/1009548342756552704/WKbK6zT1_normal.jpg",
"profile_image_url_https": "https://pbs.twimg.com/profile_images/1009548342756552704/WKbK6zT1_normal.jpg",
"profile_banner_url": "https://pbs.twimg.com/profile_banners/716695992/1529530058",
"profile_link_color": "E81C4F",
"profile_sidebar_border_color": "FFFFFF",
"profile_sidebar_fill_color": "DDEEF6",
"profile_text_color": "333333",
"profile_use_background_image": true,
"has_extended_profile": true,
"default_profile": false,
"default_profile_image": false,
"following": false,
"follow_request_sent": false,
"notifications": false,
"translator_type": "none"
},
"geo": null,
"coordinates": null,
"place": null,
"contributors": null,
"retweeted_status": {
"created_at": "Thu Mar 28 21:29:40 +0000 2019",
"id": 1111379856640479200,
"id_str": "1111379856640479234",
"text": "I SAID WHOEVA THREW THAT BANANA, YO MOMS A HOE. https://t.co/8ZbXMAF7lC",
"truncated": false,
"entities": {
"hashtags": [],
"symbols": [],
"user_mentions": [],
"urls": [],
"media": [
{
"id": 1111379848994259000,
"id_str": "1111379848994258944",
"indices": [
48,
71
],
"media_url": "http://pbs.twimg.com/media/D2xqFZXUgAAvSaD.jpg",
"media_url_https": "https://pbs.twimg.com/media/D2xqFZXUgAAvSaD.jpg",
"url": "https://t.co/8ZbXMAF7lC",
"display_url": "pic.twitter.com/8ZbXMAF7lC",
"expanded_url": "https://twitter.com/alezander/status/1111379856640479234/photo/1",
"type": "photo",
"sizes": {
"large": {
"w": 1024,
"h": 576,
"resize": "fit"
},
"thumb": {
"w": 150,
"h": 150,
"resize": "crop"
},
"small": {
"w": 680,
"h": 383,
"resize": "fit"
},
"medium": {
"w": 1024,
"h": 576,
"resize": "fit"
}
}
}
]
},
"extended_entities": {
"media": [
{
"id": 1111379848994259000,
"id_str": "1111379848994258944",
"indices": [
48,
71
],
"media_url": "http://pbs.twimg.com/media/D2xqFZXUgAAvSaD.jpg",
"media_url_https": "https://pbs.twimg.com/media/D2xqFZXUgAAvSaD.jpg",
"url": "https://t.co/8ZbXMAF7lC",
"display_url": "pic.twitter.com/8ZbXMAF7lC",
"expanded_url": "https://twitter.com/alezander/status/1111379856640479234/photo/1",
"type": "photo",
"sizes": {
"large": {
"w": 1024,
"h": 576,
"resize": "fit"
},
"thumb": {
"w": 150,
"h": 150,
"resize": "crop"
},
"small": {
"w": 680,
"h": 383,
"resize": "fit"
},
"medium": {
"w": 1024,
"h": 576,
"resize": "fit"
}
}
}
]
},
"metadata": {
"iso_language_code": "en",
"result_type": "recent"
},
"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
"in_reply_to_status_id": null,
"in_reply_to_status_id_str": null,
"in_reply_to_user_id": null,
"in_reply_to_user_id_str": null,
"in_reply_to_screen_name": null,
"user": {
"id": 1045103187227594800,
"id_str": "1045103187227594752",
"name": "zander",
"screen_name": "alezander",
"location": "",
"description": "who let me have a twitter account",
"url": "https://t.co/faaGIPYqJE",
"entities": {
"url": {
"urls": [
{
"url": "https://t.co/faaGIPYqJE",
"expanded_url": "http://instagram.com/zandirt",
"display_url": "instagram.com/zandirt",
"indices": [
0,
23
]
}
]
},
"description": {
"urls": []
}
},
"protected": false,
"followers_count": 75848,
"friends_count": 3342,
"listed_count": 540,
"created_at": "Thu Sep 27 00:09:51 +0000 2018",
"favourites_count": 6270,
"utc_offset": null,
"time_zone": null,
"geo_enabled": false,
"verified": false,
"statuses_count": 695,
"lang": "en",
"contributors_enabled": false,
"is_translator": false,
"is_translation_enabled": false,
"profile_background_color": "F5F8FA",
"profile_background_image_url": null,
"profile_background_image_url_https": null,
"profile_background_tile": false,
"profile_image_url": "http://pbs.twimg.com/profile_images/1109990735099510784/fA2sG_2l_normal.jpg",
"profile_image_url_https": "https://pbs.twimg.com/profile_images/1109990735099510784/fA2sG_2l_normal.jpg",
"profile_banner_url": "https://pbs.twimg.com/profile_banners/1045103187227594752/1553477389",
"profile_link_color": "1DA1F2",
"profile_sidebar_border_color": "C0DEED",
"profile_sidebar_fill_color": "DDEEF6",
"profile_text_color": "333333",
"profile_use_background_image": true,
"has_extended_profile": false,
"default_profile": true,
"default_profile_image": false,
"following": false,
"follow_request_sent": false,
"notifications": false,
"translator_type": "none"
},
"geo": null,
"coordinates": null,
"place": null,
"contributors": null,
"is_quote_status": false,
"retweet_count": 36685,
"favorite_count": 108458,
"favorited": false,
"retweeted": false,
"possibly_sensitive": false,
"lang": "en"
},
"is_quote_status": false,
"retweet_count": 36685,
"favorite_count": 0,
"favorited": false,
"retweeted": false,
"possibly_sensitive": false,
"lang": "en"
},
{
"created_at": "Fri Mar 29 18:40:19 +0000 2019",
"id": 1111699625780613100,
"id_str": "1111699625780613120",
"text": "@Banana_JoAnna ok hot ass bitch with your new profile pic I see you 👀",
"truncated": false,
"entities": {
"hashtags": [],
"symbols": [],
"user_mentions": [
{
"screen_name": "Banana_JoAnna",
"name": "JoAnna",
"id": 46308615,
"id_str": "46308615",
"indices": [
0,
14
]
}
],
"urls": []
},
"metadata": {
"iso_language_code": "en",
"result_type": "recent"
},
"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
"in_reply_to_status_id": null,
"in_reply_to_status_id_str": null,
"in_reply_to_user_id": 46308615,
"in_reply_to_user_id_str": "46308615",
"in_reply_to_screen_name": "Banana_JoAnna",
"user": {
"id": 35656789,
"id_str": "35656789",
"name": "P.",
"screen_name": "paolaim5",
"location": "Texas",
"description": "I love naps but I stay WOKE.                   sc/insta: paolaim5",
"url": null,
"entities": {
"description": {
"urls": []
}
},
"protected": false,
"followers_count": 346,
"friends_count": 413,
"listed_count": 2,
"created_at": "Mon Apr 27 03:27:31 +0000 2009",
"favourites_count": 13659,
"utc_offset": null,
"time_zone": null,
"geo_enabled": true,
"verified": false,
"statuses_count": 39882,
"lang": "en",
"contributors_enabled": false,
"is_translator": false,
"is_translation_enabled": false,
"profile_background_color": "009999",
"profile_background_image_url": "http://abs.twimg.com/images/themes/theme9/bg.gif",
"profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme9/bg.gif",
"profile_background_tile": true,
"profile_image_url": "http://pbs.twimg.com/profile_images/1100636619890216961/fAjEOQUs_normal.jpg",
"profile_image_url_https": "https://pbs.twimg.com/profile_images/1100636619890216961/fAjEOQUs_normal.jpg",
"profile_banner_url": "https://pbs.twimg.com/profile_banners/35656789/1526249701",
"profile_link_color": "009999",
"profile_sidebar_border_color": "FFFFFF",
"profile_sidebar_fill_color": "252429",
"profile_text_color": "666666",
"profile_use_background_image": false,
"has_extended_profile": true,
"default_profile": false,
"default_profile_image": false,
"following": false,
"follow_request_sent": false,
"notifications": false,
"translator_type": "none"
},
"geo": null,
"coordinates": null,
"place": null,
"contributors": null,
"is_quote_status": false,
"retweet_count": 0,
"favorite_count": 0,
"favorited": false,
"retweeted": false,
"lang": "en"
},
{
"created_at": "Fri Mar 29 18:40:18 +0000 2019",
"id": 1111699622207123500,
"id_str": "1111699622207123457",
"text": "RT @Drogadosoy: Acabas de mirar la banana doble, dale RT para buena suerte, si no le das son 5 años de mala suerte. https://t.co/mhRn5gaU4p",
"truncated": false,
"entities": {
"hashtags": [],
"symbols": [],
"user_mentions": [
{
"screen_name": "Drogadosoy",
"name": "El Chico Drogado",
"id": 1460876869,
"id_str": "1460876869",
"indices": [
3,
14
]
}
],
"urls": [],
"media": [
{
"id": 1109954386908901400,
"id_str": "1109954386908901376",
"indices": [
116,
139
],
"media_url": "http://pbs.twimg.com/media/D2dZolSXcAAlOiz.jpg",
"media_url_https": "https://pbs.twimg.com/media/D2dZolSXcAAlOiz.jpg",
"url": "https://t.co/mhRn5gaU4p",
"display_url": "pic.twitter.com/mhRn5gaU4p",
"expanded_url": "https://twitter.com/Drogadosoy/status/1109954392952840194/photo/1",
"type": "photo",
"sizes": {
"small": {
"w": 680,
"h": 504,
"resize": "fit"
},
"thumb": {
"w": 150,
"h": 150,
"resize": "crop"
},
"medium": {
"w": 750,
"h": 556,
"resize": "fit"
},
"large": {
"w": 750,
"h": 556,
"resize": "fit"
}
},
"source_status_id": 1109954392952840200,
"source_status_id_str": "1109954392952840194",
"source_user_id": 1460876869,
"source_user_id_str": "1460876869"
}
]
},
"extended_entities": {
"media": [
{
"id": 1109954386908901400,
"id_str": "1109954386908901376",
"indices": [
116,
139
],
"media_url": "http://pbs.twimg.com/media/D2dZolSXcAAlOiz.jpg",
"media_url_https": "https://pbs.twimg.com/media/D2dZolSXcAAlOiz.jpg",
"url": "https://t.co/mhRn5gaU4p",
"display_url": "pic.twitter.com/mhRn5gaU4p",
"expanded_url": "https://twitter.com/Drogadosoy/status/1109954392952840194/photo/1",
"type": "photo",
"sizes": {
"small": {
"w": 680,
"h": 504,
"resize": "fit"
},
"thumb": {
"w": 150,
"h": 150,
"resize": "crop"
},
"medium": {
"w": 750,
"h": 556,
"resize": "fit"
},
"large": {
"w": 750,
"h": 556,
"resize": "fit"
}
},
"source_status_id": 1109954392952840200,
"source_status_id_str": "1109954392952840194",
"source_user_id": 1460876869,
"source_user_id_str": "1460876869"
}
]
},
"metadata": {
"iso_language_code": "es",
"result_type": "recent"
},
"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
"in_reply_to_status_id": null,
"in_reply_to_status_id_str": null,
"in_reply_to_user_id": null,
"in_reply_to_user_id_str": null,
"in_reply_to_screen_name": null,
"user": {
"id": 966581833587707900,
"id_str": "966581833587707904",
"name": "mmari",
"screen_name": "fogelermari",
"location": "Misiones, Argentina",
"description": "ig: _marifogeler",
"url": null,
"entities": {
"description": {
"urls": []
}
},
"protected": false,
"followers_count": 273,
"friends_count": 166,
"listed_count": 0,
"created_at": "Thu Feb 22 07:54:02 +0000 2018",
"favourites_count": 1390,
"utc_offset": null,
"time_zone": null,
"geo_enabled": false,
"verified": false,
"statuses_count": 1282,
"lang": "en",
"contributors_enabled": false,
"is_translator": false,
"is_translation_enabled": false,
"profile_background_color": "000000",
"profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
"profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
"profile_background_tile": false,
"profile_image_url": "http://pbs.twimg.com/profile_images/1108543800874618883/nS7dvfp3_normal.jpg",
"profile_image_url_https": "https://pbs.twimg.com/profile_images/1108543800874618883/nS7dvfp3_normal.jpg",
"profile_banner_url": "https://pbs.twimg.com/profile_banners/966581833587707904/1550617003",
"profile_link_color": "F58EA8",
"profile_sidebar_border_color": "000000",
"profile_sidebar_fill_color": "000000",
"profile_text_color": "000000",
"profile_use_background_image": false,
"has_extended_profile": false,
"default_profile": false,
"default_profile_image": false,
"following": false,
"follow_request_sent": false,
"notifications": false,
"translator_type": "none"
},
"geo": null,
"coordinates": null,
"place": null,
"contributors": null,
"retweeted_status": {
"created_at": "Sun Mar 24 23:05:23 +0000 2019",
"id": 1109954392952840200,
"id_str": "1109954392952840194",
"text": "Acabas de mirar la banana doble, dale RT para buena suerte, si no le das son 5 años de mala suerte. https://t.co/mhRn5gaU4p",
"truncated": false,
"entities": {
"hashtags": [],
"symbols": [],
"user_mentions": [],
"urls": [],
"media": [
{
"id": 1109954386908901400,
"id_str": "1109954386908901376",
"indices": [
100,
123
],
"media_url": "http://pbs.twimg.com/media/D2dZolSXcAAlOiz.jpg",
"media_url_https": "https://pbs.twimg.com/media/D2dZolSXcAAlOiz.jpg",
"url": "https://t.co/mhRn5gaU4p",
"display_url": "pic.twitter.com/mhRn5gaU4p",
"expanded_url": "https://twitter.com/Drogadosoy/status/1109954392952840194/photo/1",
"type": "photo",
"sizes": {
"small": {
"w": 680,
"h": 504,
"resize": "fit"
},
"thumb": {
"w": 150,
"h": 150,
"resize": "crop"
},
"medium": {
"w": 750,
"h": 556,
"resize": "fit"
},
"large": {
"w": 750,
"h": 556,
"resize": "fit"
}
}
}
]
},
"extended_entities": {
"media": [
{
"id": 1109954386908901400,
"id_str": "1109954386908901376",
"indices": [
100,
123
],
"media_url": "http://pbs.twimg.com/media/D2dZolSXcAAlOiz.jpg",
"media_url_https": "https://pbs.twimg.com/media/D2dZolSXcAAlOiz.jpg",
"url": "https://t.co/mhRn5gaU4p",
"display_url": "pic.twitter.com/mhRn5gaU4p",
"expanded_url": "https://twitter.com/Drogadosoy/status/1109954392952840194/photo/1",
"type": "photo",
"sizes": {
"small": {
"w": 680,
"h": 504,
"resize": "fit"
},
"thumb": {
"w": 150,
"h": 150,
"resize": "crop"
},
"medium": {
"w": 750,
"h": 556,
"resize": "fit"
},
"large": {
"w": 750,
"h": 556,
"resize": "fit"
}
}
}
]
},
"metadata": {
"iso_language_code": "es",
"result_type": "recent"
},
"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
"in_reply_to_status_id": null,
"in_reply_to_status_id_str": null,
"in_reply_to_user_id": null,
"in_reply_to_user_id_str": null,
"in_reply_to_screen_name": null,
"user": {
"id": 1460876869,
"id_str": "1460876869",
"name": "El Chico Drogado",
"screen_name": "Drogadosoy",
"location": "Colombia",
"description": "SI QUIERES REÍR, SÍGUEME, NO SE A DONDE VOY [PARODY ACCOUNT]·⭐Contacto  ☛ notengosuerte@live.com\nActiva las notificaciones⚠",
"url": "https://t.co/sqkTXYbyEo",
"entities": {
"url": {
"urls": [
{
"url": "https://t.co/sqkTXYbyEo",
"expanded_url": "http://Instagram.com/SoyDrogado",
"display_url": "Instagram.com/SoyDrogado",
"indices": [
0,
23
]
}
]
},
"description": {
"urls": []
}
},
"protected": false,
"followers_count": 338005,
"friends_count": 377,
"listed_count": 856,
"created_at": "Sun May 26 23:27:04 +0000 2013",
"favourites_count": 39931,
"utc_offset": null,
"time_zone": null,
"geo_enabled": true,
"verified": false,
"statuses_count": 20337,
"lang": "en-gb",
"contributors_enabled": false,
"is_translator": false,
"is_translation_enabled": false,
"profile_background_color": "1A1B1F",
"profile_background_image_url": "http://abs.twimg.com/images/themes/theme9/bg.gif",
"profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme9/bg.gif",
"profile_background_tile": false,
"profile_image_url": "http://pbs.twimg.com/profile_images/1013639912258703361/WZxrytNR_normal.jpg",
"profile_image_url_https": "https://pbs.twimg.com/profile_images/1013639912258703361/WZxrytNR_normal.jpg",
"profile_banner_url": "https://pbs.twimg.com/profile_banners/1460876869/1520476897",
"profile_link_color": "2C11A4",
"profile_sidebar_border_color": "000000",
"profile_sidebar_fill_color": "252429",
"profile_text_color": "666666",
"profile_use_background_image": true,
"has_extended_profile": true,
"default_profile": false,
"default_profile_image": false,
"following": false,
"follow_request_sent": false,
"notifications": false,
"translator_type": "regular"
},
"geo": null,
"coordinates": null,
"place": null,
"contributors": null,
"is_quote_status": false,
"retweet_count": 4230,
"favorite_count": 827,
"favorited": false,
"retweeted": false,
"possibly_sensitive": true,
"lang": "es"
},
"is_quote_status": false,
"retweet_count": 4230,
"favorite_count": 0,
"favorited": false,
"retweeted": false,
"possibly_sensitive": false,
"lang": "es"
},
{
"created_at": "Fri Mar 29 18:40:18 +0000 2019",
"id": 1111699621842223100,
"id_str": "1111699621842223104",
"text": "@POPline @SmashAnitta @Anitta @iambeckyg Cadê minha banana Kkkkkk?",
"truncated": false,
"entities": {
"hashtags": [],
"symbols": [],
"user_mentions": [
{
"screen_name": "POPline",
"name": "POPline",
"id": 23894637,
"id_str": "23894637",
"indices": [
0,
8
]
},
{
"screen_name": "SmashAnitta",
"name": "Smash Hit! 💋 KISSES 05 April",
"id": 940935305007419400,
"id_str": "940935305007419395",
"indices": [
9,
21
]
},
{
"screen_name": "Anitta",
"name": "Anitta",
"id": 141817380,
"id_str": "141817380",
"indices": [
22,
29
]
},
{
"screen_name": "iambeckyg",
"name": "Becky G.",
"id": 128023009,
"id_str": "128023009",
"indices": [
30,
40
]
}
],
"urls": []
},
"metadata": {
"iso_language_code": "pt",
"result_type": "recent"
},
"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
"in_reply_to_status_id": 1111637580381069300,
"in_reply_to_status_id_str": "1111637580381069312",
"in_reply_to_user_id": 23894637,
"in_reply_to_user_id_str": "23894637",
"in_reply_to_screen_name": "POPline",
"user": {
"id": 705206994928607200,
"id_str": "705206994928607233",
"name": "nt",
"screen_name": "valdinetenasci3",
"location": "São Paulo, Brasil",
"description": "a maior loucura é lucidez",
"url": null,
"entities": {
"description": {
"urls": []
}
},
"protected": false,
"followers_count": 317,
"friends_count": 685,
"listed_count": 0,
"created_at": "Thu Mar 03 01:43:44 +0000 2016",
"favourites_count": 21691,
"utc_offset": null,
"time_zone": null,
"geo_enabled": true,
"verified": false,
"statuses_count": 6267,
"lang": "pt",
"contributors_enabled": false,
"is_translator": false,
"is_translation_enabled": false,
"profile_background_color": "F5F8FA",
"profile_background_image_url": null,
"profile_background_image_url_https": null,
"profile_background_tile": false,
"profile_image_url": "http://pbs.twimg.com/profile_images/1106177925836083202/E4Hy1Q2A_normal.jpg",
"profile_image_url_https": "https://pbs.twimg.com/profile_images/1106177925836083202/E4Hy1Q2A_normal.jpg",
"profile_banner_url": "https://pbs.twimg.com/profile_banners/705206994928607233/1548523479",
"profile_link_color": "1DA1F2",
"profile_sidebar_border_color": "C0DEED",
"profile_sidebar_fill_color": "DDEEF6",
"profile_text_color": "333333",
"profile_use_background_image": true,
"has_extended_profile": true,
"default_profile": true,
"default_profile_image": false,
"following": false,
"follow_request_sent": false,
"notifications": false,
"translator_type": "none"
},
"geo": null,
"coordinates": null,
"place": null,
"contributors": null,
"is_quote_status": false,
"retweet_count": 0,
"favorite_count": 0,
"favorited": false,
"retweeted": false,
"lang": "pt"
}
],
"search_metadata": {
"completed_in": 0.031,
"max_id": 1111699639051395100,
"max_id_str": "1111699639051395073",
"next_results": "?max_id=1111699621842223103&q=banana%20since%3A2019-03-25&count=10&include_entities=1",
"query": "banana+since%3A2019-03-25",
"refresh_url": "?since_id=1111699639051395073&q=banana%20since%3A2019-03-25&include_entities=1",
"count": 10,
"since_id": 0,
"since_id_str": "0"
}
}

    res.status(200).json(data)
})

module.exports = twitterRoutes