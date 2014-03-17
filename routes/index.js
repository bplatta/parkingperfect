
var data = require('../data');

var dataSpots = data.results; // array of json objects
var fakeUser = data.user; // single json object

exports.list = function(req, res){
	res.render('list', { view: "list", title: 'Parking Perfect: List', data: dataSpots, favorites: fakeUser.favorites} );
};

exports.settings = function(req, res){
	res.render('settings',{ view: "settings", title: 'Parking Perfect: Settings', user: fakeUser, favorites: fakeUser.favorites});
};

exports.map = function(req, res){
	res.render('map', { view: "map", title: 'Parking Perfect: Map', favorites: fakeUser.favorites});
};

exports.check = function(req, res){
	res.render('settings-mia', { title: 'Parking Perfect'});
};