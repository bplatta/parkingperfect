$(document).ready(function(){ 
    var current="";
    var count = 0;
    var display = $('#outputInfo');
    var favorites = $('#hiddendata span').html().split(',');

    $('.spotset').click(function(){
        current = $('#current').val();
        if(current!=""){
            display.css('background-color', '#B2D3F4');
            display.html(current + " set as current spot");
            display.css('visibility','visible');
        }
    });

    $('.check').click(function(){
        if (current=="") {
            display.css('background-color','#FFA6A6');
            display.html("Please enter a spot");
            display.css('visibility','visible');
        } else {
            display.css('background-color', '#B2D3F4');
            display.html("Yes! This spot has 2-hour metered parking");
            display.css('visibility','visible');
        }
    });

    $('.deleteFav').bind("click", function(){
        var oldFav = $(this).parent().html().split('<')[0];
        favorites.splice(favorites.indexOf(oldFav),1);

        $(this).parent().remove();
        console.log(oldFav + " removed from favorites");
        console.log(favorites);
    });

    $('.addFav').click(function() {
        count += 1;
        var newItem = $('#addFav').val();
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
});