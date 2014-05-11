var Bob = function() {};

var toneHelpers = {
  isUpcase : function(input) {
    return input === input.toUpperCase();
  },

  hasLetters : function(input) {
    return input !== input.toLowerCase();
  },

  isSilent : function(input){
    return input.trim() === "";
  },

  isScreaming : function(input) {
    var formats = Bob.prototype.toneHeardFormats;
    return this.isUpcase(input) && this.hasLetters(input);
  },

  isQuestion : function(input) {
    return input.trim().slice(-1) === "?";
  },

  isWhatever : function(input) {
    return true;
  },
};

Bob.prototype = {

  responseOrder: ["isSilent", "isScreaming", "isQuestion", "isWhatever"],

  responsesTo: {
    isSilent : "Fine. Be that way!",
    isScreaming : "Woah, chill out!",
    isQuestion : "Sure.",
    isWhatever : "Whatever."
  },

  hey : function(input){
    for(var index = 0; index <= this.responseOrder.length - 1; index ++){
      object = this.responseOrder[index];
      if (toneHelpers[object](input)) {return this.responsesTo[object];}
    }
  }
};

module.exports = Bob;