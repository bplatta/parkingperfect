$(document).ready(function(){

	var win_width = $(window).width();
	var offset_search;

	$('.search-visible').click(function(){
		if($(this).parent().hasClass("opened")) {
			$(this).parent().animate({left:'-64%'}, {queue: false, duration: 500}).removeClass("opened");
		} else {
			$(this).parent().animate({left:'0em'}, {queue: false, duration: 500}).addClass("opened");
		}
	});

	$('#timepicker1').timepicker();
	$('#timepicker2').timepicker();
});