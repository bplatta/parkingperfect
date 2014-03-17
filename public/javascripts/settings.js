$(document).ready(function(){
    var count = 0;
    var displayMessage = $('#setMessage');
    var display = displayMessage.parent();
    var modal = display.parent();
    var rmodal = $('#rform');
    var favorites = $('.hiddendata.settings span').html().split(',');
    var current = $('.hiddendata.user span').html();
    console.log(current);

    $('#rtime').timepicker();

    // modal

    $('.closeO').click(function(){
        display.hide();
        rmodal.hide();
        $('.overlay').hide();
    });

   modal.click(function(){
        display.hide();
        rmodal.hide();
        $('.overlay').hide();
    });

    display.click(function(){
        return false;
    });

    rmodal.click(function(){
        return false;
    });

    $('.remind').click(function(){
        modal.show();
        rmodal.show();
    });


    $('.spotset').click(function(){
        ncurrent = $('#current').val();
        rmodal.hide();
        if(ncurrent!=""){
            displayMessage.html(ncurrent + " added as current spot");
            display.css('background-color', '#B2D3F4');
            display.show();
            modal.show();

            data = {};
            data.current = ncurrent;

            $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: 'http://parkingperfect.herokuapp.com/settings/updateSpot',
            success: function(newItem) {
                console.log('Success: ' + ncurrent + ' set to current');
            } 
        });
        }
    });

    $('.check').click(function(){
        rmodal.hide();
        if (current=="") {
            display.css('background-color','#FFA6A6');
            displayMessage.html("Please enter a spot");
            display.show();
            modal.show();
        } else {
            display.css('background-color', '#B2D3F4');
            displayMessage.html("Yes! This spot has 2-hour metered parking");
            display.show();
            modal.show();
        }
    });

    $('.deleteFav').bind("click", function(){
        var oldFav = $(this).parent().html().split('<')[0];
        favorites.splice(favorites.indexOf(oldFav),1);

        data = {};
        data.favorite = oldFav;

        $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: 'http://parkingperfect.herokuapp.com/settings/del',
            success: function(newItem) {
                console.log('Success: ' + newItem + ' deleted from favorites');
            } 
        });

        $(this).parent().remove();
        console.log(oldFav + " removed from favorites");
        console.log(favorites);
    });

    $('.addFav').click(function() {
        count += 1;
        var newItem = $('#addFav').val();
        data = {};
        data.favorite = newItem;

        $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: 'http://parkingperfect.herokuapp.com/settings/add',
            success: function(newItem) {
                console.log('Success: ' + newItem + ' added to favorites');
            } 
        });

        console.log(newItem);
        if(newItem != "") {
            favorites.push(newItem);
            var addLi = '<li>' + newItem + '<img src="images/delete.png" id="deleteFav-' + count + '"' + '></li>';
            $(this).parent().parent().prepend(addLi);
            console.log(favorites);
            console.log(addLi);

            var newEl = "#deleteFav-" + count;
            $(newEl).bind("click", function(){
                var oldFav = $(this).parent().html().split('<')[0];
                favorites.splice(favorites.indexOf(oldFav),1);

                $(this).parent().remove();
                console.log(oldFav + " removed from favorites");
                console.log(favorites);
            });
        }
    });

    window.addEventListener("resize", function() {
        if (window.innerHeight < initialScreenSize) {
            $('#footer').hide();
        } else {
            $('#footer').show();
        }
    });
    
});