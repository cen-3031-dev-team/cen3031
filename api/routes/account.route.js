const express = require('express')
const accountRoutes = express.Router()
var Twit = require('twit')

// Require Account model in our routes module
let Account = require('../models/accounts.model')

// Defined store route
accountRoutes.route('/add').post(function (req, res)
{
    let account = new Account(req.body)
    
    Account.findOne({email: account.email}, function(err, accounts)
    {
        if (err)
        {
            res.status(400).send("Error.")
        }
        else
        {
            if (!accounts)
            {
                account.save()
                .then(() =>
                {
                    res.status(200).json({'user': 'New user added successfully.'})
                })
                .catch(() =>
                {
                    res.status(400).send("Unable to save to database.")
                })
            }
            else
            {
                res.status(400).send("User with that email already exists.")

            }
        }
    })
})

// Defined get data(index or listing) route
accountRoutes.route('/validate').post(function (req, res)
{
    let account = new Account(req.body)

    Account.findOne({email: account.email}, function(err, accounts)
    {
        if(err)
        {
            res.status(400).send("Error.")
        }
        else
        {
            if (accounts != null)
            {
                accounts.comparePassword(account.password, function(err, isMatch) {
                    if (err) throw err;
                    if(isMatch)
                    {
                        res.status(200).send("Validation successful.")
                    }
                    else
                    {
                        res.status(200).send("Validation unsuccessful.")
                    }
                });
            }
            else
            {
                res.status(400).send("User doesn't exist.")
            }
        }
    })
})

module.exports = accountRoutes