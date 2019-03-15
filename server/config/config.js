//This file holds any configuration variables we may need 
//'config.js' is typically ignored by git to protect sensitive information, such as your database's username and password

module.exports = {
  db: {
    uri: 'mongodb://user:userpassword1@ds147003.mlab.com:47003/mwbootcamp3', //place the URI of your mongo database here.
  }, 
  port: process.env.PORT
};