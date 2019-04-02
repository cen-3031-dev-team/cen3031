// server.js
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./api/DB.js')
const path = require('path')
const serveStatic = require('serve-static')
const PORT = process.env.PORT || 5000

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => { console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
)

app.use(serveStatic(__dirname + "/dist"))
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// Accounts routes
const accountRoute = require('./api/routes/account.route')
app.use('/accounts', accountRoute)

// Twitter routes
const twitterRoute = require('./api/routes/twitter.route')
app.use('/twitter', twitterRoute)

app.listen(PORT, function() {
    console.log('Server is running on Port:',PORT)
})