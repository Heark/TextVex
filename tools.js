console.log("Loaded Tools");
Tools = {
shuffle: function(items) {
return items[Math.floor(Math.random()*items.length)];
},
  
randNum: function(min, max) {
  return Math.random() * (max - min) + min;
}

}
