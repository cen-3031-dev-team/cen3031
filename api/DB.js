require('dotenv').config()

module.exports = {
    DB: 'mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@ds147003.mlab.com:47003/mwbootcamp3'
}