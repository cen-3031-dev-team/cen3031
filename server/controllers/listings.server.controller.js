
/* Dependencies */
var mongoose = require('mongoose'), 
    Listing = require('../models/listings.server.model.js');
/* Create a user */
exports.create = function(req, res) {

  /* Instantiate a Listing */
  var listing = new Listing(req.body);


  /* Then save the listing */
  listing.save(function(err) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    }else{
      res.json(listing);
    }
  });
};

/* Validate user */
exports.validatePassword = function(req, res) {
  Listing.findById(req.listing.email).exec(function(err, listing) {
    if(err) {
      res.status(400).send(err);
    } else {
      if(req.listing.password = listing.password)
      {
        res.send("Valid");
      }else{
        res.send("Invald");
      }
      next();
    }
  });
};

/* Update a listing 
exports.update = function(req, res) {
  var listing = req.listing;
  listing.name = req.body.name;
  listing.address = req.body.address;
  listing.code = req.body.code;
  
  listing.save(function(err) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    }else{
      res.json(listing);
    }
  });
};

exports.delete = function(req, res) {
  var listing = req.listing;
  listing.remove(function(err)
  {
    if(err)
    {
      console.log(err);
      res.status(400).send(err);
    }else{
      res.json(listing);
    }
  }); 
  /** TODO **/
  /* Remove the article 
};

exports.list = function(req, res) {
  Listing.find({}).sort('code').exec(function(err, users)
  {
    if(err)
    {
      console.log(err);
      res.status(400).send(err);
    }else{
      console.log(users);
      res.json(users);
    }
  })
};

/* 
  Middleware: find a listing by its ID, then pass it to the next request handler. 

  Find the listing using a mongoose query, 
        bind it to the request object as the property 'listing', 
        then finally call next
 
exports.listingByID = function(req, res, next, id) {
  Listing.findById(id).exec(function(err, listing) {
    if(err) {
      res.status(400).send(err);
    } else {
      req.listing = listing;
      next();
    }
  });
};
*/