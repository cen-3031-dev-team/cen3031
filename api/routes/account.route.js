const express = require('express');
const accountRoutes = express.Router();

// Require Account model in our routes module
let Account = require('../models/accounts.model');

// Defined store route
accountRoutes.route('/add').post(function (req, res) {
  let account = new Account(req.body);
  /*
  Account.find(function(err, accounts){
    if(err){
      res.json(err);
    }
    else {
      res.json(posts);
    }
  });
  */
  account.save()
    .then(() => {
      res.status(200).json({'user': 'new user added successfully'});
    })
    .catch(() => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
accountRoutes.route('/validate').get(function (req, res) {
    Account.find(function(err, accounts){
    if(err){
      res.json(err);
    }
    else {
      res.json(posts);
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