const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 4000
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./DB.js')

module.exports.init = function() {
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => { console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
)

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// Accounts routes
const accountRoute = require('./routes/account.route')
app.use('/accounts', accountRoute)

// Twitter routes
const twitterRoute = require('./routes/twitter.route')
app.use('/twitter', twitterRoute)

app.listen(PORT, function(){
    console.log('Server is running on Port:',PORT)
})

return app;
}