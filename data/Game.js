console.log("Loaded Game.")
    // #Boolean Variables
var game_started = false;
var gotNum;



$(document).ready(function() {
    if (game_started == false) {
        $("body").append("<center><button id=\"Start\" class=\"btn btn-primary\"> Start </button></center>");

    } else {
        // Do nothing...
    }

    // Start Button
    $("#Start").click(function() {
            if (game_started == false) {
                $("body").append("<center><button id=\"move\" class=\"btn btn-success\"> Walk </button></center>");
                game_started = true;
            } else {
                box.error("You already started!");
            }

        })
        // End of Start Button

    // Walk Button
    $("#move").click(function() {
        /*
        gotNum = Tools.randNum(1, 200);
        console.log(gotNum)
        if (gotNum <= 100) {
            // no battle   
        } else if (gotNum > 200) {
            Scene.call.Battle();
        }
        */
        box.info("Test!")

    })

})

    // End of Walk Button
