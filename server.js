var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var app = express();

app.use(morgan('dev'));

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

app.listen(7777,function(err){
	if(err) throw err;
	console.log("Server is listening on port 7777");
});

app.get('/',function(req , res) {
	res.json("Hi I am a web app!");
});