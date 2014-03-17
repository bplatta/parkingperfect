$(document).ready(function(){

	var win_width = $(window).width();
	var offset_search;
	var hiddendata = $('.hiddendata span').html();

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

	console.log(hiddendata);

	if (hiddendata == "list") {
		console.log('success');
		slideSearch();
	}
});