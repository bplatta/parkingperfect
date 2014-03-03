
var data = require('../data');

var dataSpots = data.results; // array of json objects
var fakeUser = data.user; // single json object

exports.list = function(req, res){
	res.render('list', { title: 'List', data: dataSpots} );
};

exports.settings = function(req, res){
	res.render('settings',{title: 'Settings', favorites: fakeUser.favorites });
};

exports.map = function(req, res){
	res.render('map', { title: 'Parking Perfect'});
};