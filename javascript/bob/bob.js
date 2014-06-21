var Bob = function() {};

Bob.prototype = {
  toneHelpers : {
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
  },

  responseOrder: ["isSilent", "isScreaming", "isQuestion", "isWhatever"],

  responsesTo: {
    isSilent : "Fine. Be that way!",
    isScreaming : "Woah, chill out!",
    isQuestion : "Sure.",
    isWhatever : "Whatever."
  },

  hey : function(input){
    // for(var index = 0; index < this.responseOrder.length; index ++){
    //   object = this.responseOrder[index];
    //   if (this.toneHelpers[object](input)) {return this.responsesTo[object];}
    // }
    var self = this;
    var result = "";
    this.responseOrder.forEach(function(object){
      if (self.toneHelpers[object](input) && result === "") {
        result = self.responsesTo[object];
      }
    });
    return result;
  }
};
  
module.exports = Bob;