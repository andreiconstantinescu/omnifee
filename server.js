// server.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

var configDB = require('./config/database.js');
var User       = require('./app/models/user');

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database

require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use('/', express.static(__dirname));
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
app.post('/alimentare', function (req, res) {
	var query = {'_id': req.body.userId};
	console.log(req.body);
	var update = {$set: {"balance": req.body.newBallance}};
	User.findOneAndUpdate(query, update, {}, function (error, person){
		console.log(person);
		if (error){
			console.log(error);
		}
	});
	res.status(200).end();
});

app.post('/pay', function(req, res) {
	console.log(req.body);
	var query = {'_id': req.body.userId};


	var toSet = {};
	toSet['balance'] = req.body.newBallance;
	toSet[req.body.paidBill] = req.body.paidBill;
	toSet['paidAll'] = req.body.paidAll;
	console.log(toSet);
	var update = {$set: toSet};

	User.findOneAndUpdate(query, update, {}, function (error, person){
		console.log(person.balance);
		if (error){
			console.log(error);
		}
	})
	// User.findById(req.body.userId, function (err, doc){
	// 	console.log(doc);
// });
app.get('/35515bb86754.html') {
	res.send('4b00e21dfa93');
}
res.status(200).end();
});
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport



// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);
