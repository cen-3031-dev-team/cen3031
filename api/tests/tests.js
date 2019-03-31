var should = require('should'), 
    request = require('supertest');
    express = require('../server.js');
    //users = require('../models/account.model.js');

/* Global variables */
var user;

function makeid(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }

/* Unit tests for testing server side routes for the listings API */
describe('Listings CRUD tests', function() {

  this.timeout(10000);

  before(function(done) {
    agent = request.agent(express.app);

    done();
  });

  it('should it able to add account', function(done) {
    user = {email : makeid(10), password : makeid(10)};
    agent.post('/accounts/add').send(user)
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err);
        should.exist(res);
        res.body.should.be("New user added successfully.");
        done();
      });
  });
  it('should be able to login', function(done) {
    agent.post('/accounts/validate').send(user)
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err);
        should.exist(res);
        res.body.should.be("Validation successful.");
        done();
      });
  });
});
