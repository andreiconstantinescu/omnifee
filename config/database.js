// config/database.js

var username = process.ENV.COMPOSE_USER ? process.ENV.COMPOSE_USER : '';
var pass = process.ENV.COMPOSE_PASS ? process.ENV.COMPOSE_PASS : '';
var url = username && pass ? 'mongodb://' + username + ':' + pass + '@linus.mongohq.com:10082/omnifee-database' : 'localhost:27017';

module.exports = {
  'url' : url
};
