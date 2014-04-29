Beer = {
  lineOne: function(round) {
    if (round === 1) {
      return round + " bottle of beer on the wall, " + round + " bottle of beer.\n";
    }
    else if (round === 0) {
      return "No more bottles of beer on the wall, no more bottles of beer.\n";
    }
    else {
      return round + " bottles of beer on the wall, " + round + " bottles of beer.\n";
    }
  },
  
  verse : function(round) {
    if (round === 1) {
      return this.lineOne(round) + "Take it down and pass it around, no more bottles of beer on the wall.\n";
    }
    else if (round === 0) {
      return "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n";
    }
    else if (round === 2) {
      return round + " bottles of beer on the wall, "+ round + " bottles of beer.\nTake one down and pass it around, " + (round -1) + " bottle of beer on the wall.\n";
    }
    else {
      return round + " bottles of beer on the wall, "+ round + " bottles of beer.\nTake one down and pass it around, " + (round -1) + " bottles of beer on the wall.\n";
    }
  },

  sing : function(start, end) {
    if(end !== parseInt(end)) {end = 0} 
    result = [];
    while(start >= end) {
      result.push(this.verse(start));
      start --;
    }
    return result.join("\n");
  }
};

module.exports = Beer;