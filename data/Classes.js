CLASSES = {
Player: function(HP, DEF, ATT, MAG, MGD) {
  this.HP = HP;
  this.DEF = DEF;
  this.ATT = ATT;
  this.MAG = MAG;
  this.MGD = MGD;
},
Monster: function(NAME, HP, DEF, ATT, MAG, MGD, DRP) {
  this.NAME = NAME;
  this.HP = HP;
  this.DEF = DEF;
  this.ATT = ATT;
  this.MAG = MAG;
  this.MGD = MGD;
  this.DRP = DRP;
},
Item: function(NAME, DESC, EFF, USINB){
  this.NAME = NAME;
  this.DESC = DESC;
  this.EFF = EFF;
  this.USINB = USINB;
},

Skill: function(NAME, DESC, DMG, TYPE){
  this.NAME = NAME;
  this.DESC = DESC;
  this.DMG = DMG;
  this.TYPE = TYPE;
}, 
Weapon: function(NAME, DESC, BOOST, STAT) {
  this.NAME = NAME;
  this.DESC = DESC;
  this.BOOST = BOOST;
  this.STAT = STAT;

}
