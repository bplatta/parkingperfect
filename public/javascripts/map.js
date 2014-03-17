var styles = [];
var markers = [];

window.onload = function() {
    var mapOptions = {
        center: new google.maps.LatLng(42.050008, -87.681903),
        zoom: 16,
        panControl: false
    };

    var map = new google.maps.Map(document.getElementById("map-view"), mapOptions);
    var geocoder = new google.maps.Geocoder();

    function geocode() {
        var address = $('#main-search').val();
        geocoder.geocode( { 'address': address}, function(results,status) {
            if (status == google.maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: map,
                    postion: results[0].geometry.location
                });
            } else {
                alert(status);
            }
        });
    }

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
        geocode();
        $('#search-box').animate({left:'-64%'}, {queue: false, duration: 500}).removeClass("opened");

    });

}