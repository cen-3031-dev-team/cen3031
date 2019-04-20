var should = require('should'), 
    request = require('supertest');
    express = require('./app.js');

var query = {queryString : "Banana", since : 3, count : 5};
var trendQuery = {queryString : "Canada"};
var trendQueryFalse = {queryString : "asifdvse"};

describe('Listings CRUD tests', function() {

  this.timeout(10000);

  before(function(done) {
    app = express.init();
    agent = request.agent(app);
    done();
  });
  it('should be able to get tweets', function(done) {
    
    agent.get('/twitter/searchTweets').query(query)
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err);
        should.exist(res);
        done();
      });
  });
  it('should be able to get a specific number of tweets', function(done) {
    
    agent.get('/twitter/searchTweets').query(query)
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err);
        should.exist(res);
        res.body.statuses.length.should.equal(5);
        done();
      });
  });
  it('should be able to get a specific number of tweets', function(done) {
    
    agent.get('/twitter/searchTweets').query(query)
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err);
        should.exist(res);
        res.body.statuses.length.should.equal(5);
        done();
      });
  });
  it('should be able to get trending tweets from a location', function(done) {
    
    agent.get('/twitter/trendingTweets').query(trendQuery)
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err);
        should.exist(res);
        done();
      });
  });
  it('should not return tweets from a location that does not exist', function(done) {
    
    agent.get('/twitter/trendingTweets').query(trendQueryFalse)
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err);
        should.exist(res);
        res.text.should.equal("No Location Found");
        done();
      });
  });
  
});
