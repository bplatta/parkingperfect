$(document).ready(function(){

	var win_width = $(window).width();
	var offset_search;
	var view = $('.hiddendata.view span').html();
    $(function(){
    	var favorites = $('.hiddendata.favs span').html().split(',');
    
    	$('#main-search').autocomplete({
    		source: favorites
    	});

    });

	function slideSearch() {
		if($('.search-visible').parent().hasClass("opened")) {
			$('.search-visible').parent().animate({left:'-64%'}, {queue: false, duration: 500}).removeClass("opened");
		} else {
			$('.search-visible').parent().animate({left:'0em'}, {queue: false, duration: 500}).addClass("opened");
		}
	}

	$('.search-visible').click(slideSearch);

	$('#timepicker1').timepicker();
	$('#timepicker2').timepicker();

	// on list page, faking search by showing div

	$('#searchb').click(function(){
		$('#fakelist').hide();
		$('.list-group').css('visibility','visible');
		slideSearch();
	});

	console.log(view);

	if (view == "list") {
		console.log('success');
		slideSearch();
	}

	var initialScreenSize = window.innerHeight;

	window.addEventListener("resize", function() {
    	if (window.innerHeight < initialScreenSize) {
        	$('#footer').hide();
    	} else {
        	$('#footer').show();
    	}
});

});