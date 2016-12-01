console.log("Loaded Tools");
Tools = {
shuffle: function(contents) {
            var output;
            var contents = this.contents;
            output = contents[Math.floor(Math.random() * contents.length)];
            return output;
},
  
randNum: function(min, max) {
  return Math.random() * (max - min) + min;
}

}
