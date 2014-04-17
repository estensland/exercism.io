var Bob = function() {};

Bob.prototype = {

  toneHeardFormats :  {
    isUpcase : function(input) {
      return input === input.toUpperCase();
    },

    hasLetters : function(input) {
      return input.match(/[a-zA-Z]/);
    },
  },

  toneHeard : {
    isSilent : function(input){
      return input.trim() === "";
    },

    isScreaming : function(input) {
      var formats = Bob.prototype.toneHeardFormats;
      return formats.isUpcase(input) && formats.hasLetters(input);
    },

    isQuestion : function(input) {
      return input.trim().slice(-1) === "?";
    },

    isWhatever : function(input) {
      return true;
    },
  },

  responsesTo: {
    isSilent : "Fine. Be that way!",
    isScreaming : "Woah, chill out!",
    isQuestion : "Sure.",
    isWhatever : "Whatever."
  },

  hey : function(input){
    for(var object in this.toneHeard){
      if (this.toneHeard[object](input)) {return (this.responsesTo[object]);}
    }
  }
};

module.exports = Bob;