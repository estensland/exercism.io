var Person = function() {};

Person.prototype.toneHeard = {
  isSilent : function(input){
    return input.trim() === "";
  },

  isScreaming : function(input) {
    return this.isUpcase(input) && this.hasLetters(input);
  },

  isUpcase : function(input) {
    return input === input.toUpperCase();
  },

  hasLetters : function(input) {
    return input.match(/[a-zA-Z]/);
  },

  isQuestion : function(input) {
    return input.trim().slice(-1) === "?";
  },
};


var Bob = function() {};

Bob.prototype = new Person();

Bob.prototype.hey = function(input){
  if (this.toneHeard.isSilent(input)) {
    return "Fine. Be that way!";
  }
  else if(this.toneHeard.isScreaming(input)){
    return "Woah, chill out!";
  }
  else if(this.toneHeard.isQuestion(input)){
    return "Sure.";
  }
  else {
    return "Whatever.";
  }
};

module.exports = Bob;