// #Boolean Variables
var game_started = false;


$(document).ready(function() {
    if (game_started == false) {
        $("body").append("<button id=\"#Start\"> Start </button>");
        
    } else {
      // Do nothing...
    }
    $("#Start").click(function(){
        game_started = true;
    })
})
