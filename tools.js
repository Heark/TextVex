console.log("Loaded Tools");
Tools = {
shuffle: function(contents) {
            var output;
            this.contents = contents;
            output = this.contents[Math.floor(Math.random() * this.contents.length)];
            return output;
},
  
randNum: function(min, max) {
  return Math.random() * (max - min) + min;
}

}
