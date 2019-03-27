const express = require('express');
const accountRoutes = express.Router();

// Require Account model in our routes module
let Account = require('../models/accounts.model');

// Defined store route
accountRoutes.route('/add').post(function (req, res) {
  let account = new Account(req.body);
  Account.findOne({email: account.email}, function(err, accounts){
    if(err){
      res.status(400).send("Error.");
    }
    else {
      if(accounts = null){
      account.save()
      .then(() => {
        res.status(200).json({'user': 'New user added successfully1.'});
      })
      .catch(() => {
        res.status(400).send("Unable to save to database.");
      })
      } else {res.status(400).send("User already exists.")};
    }
  });
});

// Defined get data(index or listing) route
accountRoutes.route('/validate').post(function (req, res) {
    let account = new Account(req.body);
    Account.findOne({email: account.email}, function(err, accounts){
    if(err){
      res.status(400).send("Error.");
    }
    else {
      if(accounts != null){
        if(accounts.password = account.password)
        {
          res.status(200).send("Validation successful.")
        }else{
          res.status(200).send("Validation unsuccessful.")
        }
      }else {res.status(400).send("User doesn't exist.")}
    }
  });
});
/*
// Defined edit route
postRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Post.findById(id, function (err, post){
      if(err) {
        res.json(err);
      }
      res.json(post);
  });
});

//  Defined update route
postRoutes.route('/update/:id').post(function (req, res) {
    Post.findById(req.params.id, function(err, post) {
    if (!post)
      res.status(404).send("data is not found");
    else {
        post.title = req.body.title;
        post.body = req.body.body;
        post.save().then(() => {
          res.json('Update complete');
      })
      .catch(() => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
postRoutes.route('/delete/:id').delete(function (req, res) {
    Post.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});
*/
module.exports = accountRoutes;