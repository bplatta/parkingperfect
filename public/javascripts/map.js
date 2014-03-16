var styles = [];
var markers = [];

window.onload = function() {
    var mapOptions = {
        center: new google.maps.LatLng(42.050008, -87.681903),
        zoom: 16,
        panControl: false
    };

    var map = new google.maps.Map(document.getElementById("map-view"), mapOptions);

    $('#searchb').click(function(){
        styles = [{
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                { "visibility": "on" },
                { "color": "#00ff00" },
                { "weight": 0.6 }
            ]
        }];

        map.setOptions({styles: styles});
        console.log(styles[0]);

    });

}