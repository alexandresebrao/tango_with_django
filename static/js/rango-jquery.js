$(document).ready( function() {



    $("#about-btn").click( function(event) {
        alert("You clicked the button using JQuery!");
    });

    $('#suggestion').keyup(function(){
        var query;
        query = $(this).val();
        $.get('/rango/suggest_category/', {suggestion: query}, function(data){
         $('#cats').html(data);
        });
	});


});