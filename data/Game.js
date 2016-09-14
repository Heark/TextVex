// #Boolean Variables
var game_started = false;


$(document).ready(function() {
    if (game_started == false) {
        $("body").append("<button id=\"#Start\"> Start </button>");
        game_started = true;
    } else {
      // Do nothing...
    }
})
