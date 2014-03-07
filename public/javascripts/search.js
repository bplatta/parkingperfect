$(document).ready(function(){

	$('#mag-click').click(function(){
		if($(this).parent().parent().hasClass("opened")) {
			$(this).parent().parent().animate({left:'-19em'}, {queue: false, duration: 500}).removeClass("opened");
		} else {
			$(this).parent().parent().animate({left:'0em'}, {queue: false, duration: 500}).addClass("opened");
		}
	});

	$('#timepicker1').timepicker();
	$('#timepicker2').timepicker();
});