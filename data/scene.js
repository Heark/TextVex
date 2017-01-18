
var Scene = {
    Call: {

        Battle: function(Enemy) {
        var sel_em;
            // Select Random enemy
            function randEn() {
            var POSS_EM;
            if (Hero.LVL <= 5) {
                POSS_EM = [slime];
            } //else if () {}

            sel_em = Tools.shuffle(POSS_EM);
            }
            // End of enemy selection
           if(this.Enemy == null || undefined){
                   randEn();
           } else {
                   sel_em = this.Enemy;
           }
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
                    bootbox.dialog({
                        message: "What do you do?",
                        buttons: {
                            fight: {
                                label: 'Attack',
                                className: 'btn-success'
                            },
                            bag: {
                                label: 'Bag',
                                className: 'btn-success'
                            },
                            flee: {
                                label: 'Flee',
                                className: 'btn-danger'
                            }
                        },
                        callback: function(result) {
                            console.log('This was logged in the callback: ' + result);
                        }
                    })


                    if (enemy_turn == true) {}

                }

            }
        }
    }

}
