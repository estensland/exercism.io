var AnagramHelpers = {
  anagramCheck : function(self, option){return option.toLowerCase() === self.sortedWord;},

  sameWordCheck : function(self, option){return self.word === option;},

  sortWord : function(word) {return word.toLowerCase().split('').sort().join('');},

};

var Anagram = function(word) {
  this.word = word.toLowerCase();
  this.sortedWord = word.toLowerCase().split('').sort().join('');
};

Anagram.prototype = {

  match: function(options) {
    results = [];
    for(var index = 0; index < options.length; index ++){
      sortedOption = AnagramHelpers.sortWord(options[index]);

      if (AnagramHelpers.sameWordCheck(this, options[index].toLowerCase())) {continue;}
      if (AnagramHelpers.anagramCheck(this, sortedOption)) {results.push(options[index]); }
    }
    return results;
  }
};

module.exports = Anagram;

      var detector = new Anagram("Orchestra");
    var matches = detector.match(['cashregister', 'Carthorse', 'radishes']);
    console.log(matches);

    