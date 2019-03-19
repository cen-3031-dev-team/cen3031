require('dotenv').config()

module.exports = {
    DB: 'mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@ds139295.mlab.com:39295/cen3031-dev-team'
}