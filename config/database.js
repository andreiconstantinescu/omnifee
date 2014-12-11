// config/database.js

var username = process.env.COMPOSE_USER ? process.env.COMPOSE_USER : '';
var pass = process.env.COMPOSE_PASS ? process.env.COMPOSE_PASS : '';
var url = username && pass ? 'mongodb://' + username + ':' + pass + '@linus.mongohq.com:10082/omnifee-database' : 'localhost:27017';

module.exports = {
  'url' : url
};
