Beer = {
  lineOne: function(round) {
    if (round === 1) {phrase = round + " bottle of beer"; }
    
    else if (round === 0) {phrase = "No more bottles of beer"; }
    
    else {phrase = round + " bottles of beer"; }
    
    return phrase + " on the wall, " + phrase.toLowerCase() + ".\n";
  },

  lineTwo: function(round) {
    if (round === 1) {
      return "Take it down and pass it around, no more bottles of beer on the wall.\n";
    }
    
    else if (round === 0) {
      return "Go to the store and buy some more, 99 bottles of beer on the wall.\n";
    }
    
    else if (round === 2) {phrase = "1 bottle"; }
    
    else {phrase = (round - 1) + " bottles"; }
    
    return "Take one down and pass it around, " + phrase + " of beer on the wall.\n";
  },

  verse : function(round) {
    return this.lineOne(round) + this.lineTwo(round);
  },

  sing : function(start, end) {
    if(end !== parseInt(end)) {end = 0;}
    result = [];
    
    while(start >= end) {
      result.push(this.verse(start));
      start --;
    }

    return result.join("\n");
  }
};

module.exports = Beer;