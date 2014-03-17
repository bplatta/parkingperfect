var data = {"results":[{
		"where": ["North of Sherman and Clark", "north"],
		"distance": "6",
		"permit": "None",
		"when": "8AM-9PM",
		"price": "Metered"
	},
	{
		"where": ["South of Foster and Maple", "south"],
		"distance": "1",
		"permit": "Res-A",
		"when": "Any",
		"price": "Free"
	},
	{
		"where": ["East of Ridge and Noyes", "east"],
		"distance": "9",
		"permit": "Res-A",
		"when": "Any",
		"price": "Free"
	},
	{
		"where": ["North of Sherman and Clark", "north"],
		"distance": "3",
		"permit": "None",
		"when": "8AM-9PM",
		"price": "Metered"
	},
	{
		"where": ["South of Foster and Maple", "south"],
		"distance": "4",
		"permit": "Res-A",
		"when": "Any",
		"price": "Free"
	},
	{
		"where": ["West of Ridge and Noyes", "west"],
		"distance": "2",
		"permit": "Res-A",
		"when": "Any",
		"price": "Free"
	}],
	"user": { 
		"name": "Abe Lincoln",
		"current": "812 Clark, Evanston",
		"reminder": null,
		"favorites": ["Norris center", "SPAC"]
	}
};

exports.getUser = function() {
	return data.user;
};

exports.getResults = function() {
	return data.results;
};

exports.changeCurrent = function(current) {
	data.user.current = current;
};

exports.delFav = function(favorite) {
	data.user.favorites.splice(data.user.favorites.indexOf(favorite),1);
};

exports.addFav = function(favorite) {
	data.user.favorites.push(favorite);
};