console.log("Loaded Game.")
// #Boolean Variables
var game_started = false;



$(document).ready(function() {
    if (game_started == false) {
        $("body").append("<center><button id=\"Start\" class=\"btn btn-primary\"> Start </button></center>");
        
    } else {
      // Do nothing...
    }
    
    // Start Button
    $("#Start").click(function(){
        if(game_started == false) {
            $("body").append( "<center><button id=\"Walk\"  class=\"btn btn-success\" > Walk </button></center>" );
         game_started = true;
        } else {
            box.error("You already started!");
        }
        
    })
    // End of Start Button
    
    // Walk Button
        $("#Walk").click(function(){
        
        
        })
    // End of Walk Button
    
})
