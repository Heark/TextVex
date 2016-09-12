CLASSES = {
Player: function(HP, DEF, ATT, MAG, MGD) {
  this.HP = HP;
  this.DEF = DEF;
  this.ATT = att;
  this.MAG = MAG;
  this.MGD = MGD;
},
Monster: function(NAME, HP, DEF, ATT, MAG, MGD) {
  this.NAME = NAME;
  this.HP = HP;
  this.DEF = DEF;
  this.ATT = ATT;
  this.MAG = MAG;
  this.MGD = MGD;
},
Item: function(NAME, DESC, EFF){
  this.NAME = NAME;
  this.DESC = DESC;
  this.EFF = EFF;
}

}
