
var data = require('../data');

var dataSpots = data.getResults(); // array of json objects
var fakeUser = data.getUser(); // single json object

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

exports.addFav = function(req, res) {
	var newF = req.body.favorite;
	console.log(newF);
	data.addFav(newF);
};

exports.delFav = function(req, res) {
	var oldF = req.body.favorite;
	console.log(oldF);
	data.delFav(oldF);
};

exports.updateSpot = function(req, res) {
var newC = req.body.current;
	console.log(newC);
	data.changeCurrent(newC);
};