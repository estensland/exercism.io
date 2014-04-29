Beer = {
  verse : function(round) {
    return round + " bottles of beer on the wall, 8 bottles of beer.\nTake one down and pass it around, " + (round -1) + " bottles of beer on the wall.\n"
  },

  sing : function(number) {
    result = [];
    while(number >= 0) {
      result.push(this.verse(number));
      number --;
    }
    return result.join("");
  }
};

module.exports = Beer;

var expected = "8 bottles of beer on the wall, 8 bottles of beer.\nTake one down and pass it around, 7 bottles of beer on the wall.\n";