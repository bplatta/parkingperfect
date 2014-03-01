
var data = require('../data');

var dataSpots = data.results; // array of json objects
var fakeUser = data.user; // single json object

exports.index = function(req, res){
  res.render('map', { title: 'Parking Perfect' });
};

exports.list = function(req, res){
	res.render('list', { title: 'List', data: dataSpots} );
};

exports.settings = function(req, res){
	res.render('settings',{title: 'Settings', settings: fakeUser });
};

exports.map = function(req, res){
	res.render('map', { title: 'Parking Perfect'});
};