var Scene = {
        Call: {

        Battle:  function() {

        // Select Random enemy
        var POSS_EM;
        if (Hero.LVL <= 5) {
            POSS_EM = [slime];
        } //else if () {}

        var sel_em = Tools.shuffle(POSS_EM);

        // End of enemy selection

        // start of battle
        var player_turn;
        var enemy_turn;
        battle_begin = function() {
            bootbox.confirm({
                    message: "A " + sel_em.NAME + " appeared, battle it?",
                    buttons: {
                        confirm: {
                            label: 'Yes',
                            className: 'btn-success'
                        },
                        cancel: {
                            label: 'No',
                            className: 'btn-danger'
                        }
                    },
                    callback: function(result) {
                        if (result == true) {
                            go();
                        } else {
                            var can_escape;
                            if (can_escape == false) {
                                battle_begin();
                                bootbox.alert("Could not escape!");
                            } else {}
                        }
                    }
                    
                    });
            }
        battle_begin();
function clearInterface() {
        
}
            function go() {
                    player_turn = true;
                if (player_turn == true) {
                bootbox.prompt({
    message: "What do you do?",
    buttons: {
        confirm: {
            label: 'Yes',
            className: 'btn-success'
        },
        cancel: {
            label: 'No',
            className: 'btn-danger'
        }, 
        test: {
                label: 'test',
                className: 'btn-danger'
        }
    },
    callback: function (result) {
        console.log('This was logged in the callback: ' + result);
    }
                }


                if (enemy_turn == true) {}

            }

        }
    }
}
