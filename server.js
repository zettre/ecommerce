var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var User = require('./models/user');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect('mongodb://root:Rankerspoint1007@ds151917.mlab.com:51917/ecommerce',function(err){
	if(err)
	{
		console.log(err);
	}
	else
	{
		console.log("Connected to database...");
	}
});

app.post('/create-user',function(req,res,next){
	var user=new User();
	user.profile.name=req.body.name;
	user.password=req.body.password;
	user.email=req.body.email;
	user.save(function(err){
		if(err) return next(err);
		res.json("User created!"+user.profile.name+"--"+user.email+"--"+user.password);
	});
});

app.listen(7777,function(err){
	if(err) throw err;
	console.log("Server is listening on port 7777");
});