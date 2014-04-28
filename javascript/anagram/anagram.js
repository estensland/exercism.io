var Anagram = function(word) {
  this.word = word.toLowerCase();
  this.sortedWord = this.word.split('').sort().join('');
};

Anagram.prototype = {
  anagramCheck : function(option){return option.toLowerCase() === this.sortedWord},

  sameWordCheck : function(option){}

  match: function(options) {
    results = []
    for(var index = 0; index < options.length; index ++){
      sortedOption = options[index].toLowerCase().split('').sort().join('');

      if (this.word === options[index].toLowerCase()) {continue;}
      if (this.anagramCheck(sortedOption)) {results.push(options[index]); }
    } 
    return results;
  }

  
};

module.exports = Anagram;

      var detector = new Anagram("Orchestra");
    var matches = detector.match(['cashregister', 'Carthorse', 'radishes']);
    console.log(matches);

    