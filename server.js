var express = require('express');
var app = express();
var json  = require('json');
//var routes= require('./routes');
var bodyParser = require('body-parser');



app.set ('views', __dirname + '/views');
app.set ('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

var person1 = {
	name: 'name',
	email: 'email'
}

var profile = {
	name: 'Niko Kähärä',
	email: 'email@email.fi',
	phone: '1234 567 879'
}

app.use(function(req, res){

	//console.log(req.path);
	if (req.path == '/' || req.path == '') {
		res.render('index', {});
	} else if (req.path.startsWith('/page2/') || req.path == '/page2') {
		res.render('page2', { test: 'param was:  ' + req.query.id +  '.' });
	} else if (req.path == '/myprofile') {

		res.render('myprofile', {name: profile.name, email: profile.email, phone: profile.phone});

	} else if (req.path.startsWith("/do")) {
		var func = req.path;
		
		if (func == "/doAsyncData") {
			console.log("Giving Contactlist Items...");
			res.json(person1);
		} else if (func == "/doUpdateMyProfile") {
			console.log("Updating user");
			console.log("setting name:  " + req.body.name);
			profile.name = req.body.name;
			profile.email = req.body.email;
			profile.phone = req.body.phone;
			res.end("updated");
		} else if (func == "/doGetUserDetails") {
			res.json(profile)
		}

		// code below will execute if the function is invalid...
		// To prevent from stalling

		res.end("INVALID");

	} else {
  	// 404
  	res.render('404');
  }
});

//app.get('/', routes.index);
//app.get('/page2', routes.page2);

//http://localhost:8080/doTestFunc


app.listen(8080);