require('dotenv').config()

module.exports = {
    DB: 'mongodb+srv://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@cluster0-3ejvn.mongodb.net/test?retryWrites=true'
}