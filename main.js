$( document ).ready(function(){
 	
    $( "button.alert" ).on( "click", function() {
        console.log( "A button with the alert class was clicked!" );
    });

    $( "<button class='alert'>Alert!</button>" ).appendTo( document.body );
});