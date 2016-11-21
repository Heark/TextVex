// #Boolean Variables
var game_started = false;


$(document).ready(function() {
    if (game_started == false) {
        $("body").append("<center><button id=\"Start\" class=\"btn btn-primary\"> Start </button></center>");
        
    } else {
      // Do nothing...
    }
    $("#Start").click(function(){
        if(game_started == false) {
            $("body").append( "<center><button id=\"Walk\"  class=\"btn btn-primary\" > Walk </button></center>" );
         game_started = true;
        } else {
        }
        
    })
})
