const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Define collection and schema for account.
let accounts = new Schema({
    email: {
        type: String
    },
    password: {
        type: String
    }
},
{
    collection: 'accounts'
})

module.exports = mongoose.model('accounts', accounts)