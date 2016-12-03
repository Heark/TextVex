var Scene = {
        Call: {

        Battle:  function() {

        // Select Random enemy
        var POSS_EM;
        if (Hero.LVL <= 5) {
            POSS_EM = [slime];
        } //else if () {}

        var sel_em = slime

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
                            flee_num = Tools.randNum(1, 100);
                            if (flee_num > 50) {
                                bootbox.alert("Could not escape!");
                                battle_begin();
                            } else {}
                        }
                    }
                    
                    });
            }

            function go() {
                if (player_turn == true) {}


                if (enemy_turn == true) {}

            }

        }
    }
}
