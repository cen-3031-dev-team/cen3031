var should = require('should'), 
    request = require('supertest');
    express = require('./app.js');

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
    app = express.init();
    agent = request.agent(app);
    done();
  });
  user = {email : makeid(10), password : makeid(10)};
  //console.log("send(help)")
  it('should be able to add account', function(done) {
    
    agent.post('/accounts/add').send(user)
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err);
        should.exist(res);
        res.text.should.equal('New user added successfully.');
        done();
      });
  });
  it('should not be able to add account with existing username', function(done) {
    agent.post('/accounts/add').send(user)
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err);
        should.exist(res);
        res.text.should.equal('User with that email already exists.');
        done();
      });
  });
  it('should be able to login', function(done) {
    agent.post('/accounts/validate').send(user)
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err);
        should.exist(res);
        res.text.should.equal('Validation successful.');
        done();
      });
  });
  user1 = {email : user.email, password : makeid(10)};
  it('should not be able to login with invalid credentials', function(done) {
    agent.post('/accounts/validate').send(user1)
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err);
        should.exist(res);
        res.text.should.equal('Validation unsuccessful.');
        done();
      });
  });
  user2 = {email : makeid(10), password : makeid(10)};
  it('should not be able to login with user that does not exist', function(done) {
    agent.post('/accounts/validate').send(user2)
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err);
        should.exist(res);
        res.text.should.equal('User doesn\'t exist.');
        done();
      });
  });
});
