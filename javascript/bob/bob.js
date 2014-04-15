var Bob = function() {}


Bob.prototype.hey = function(input){
  if (isSilent(input)) {
    return "Fine. Be that way!";
  }
  else if(isScreaming(input)){
    return "Woah, chill out!";
  }
  else if(isQuestion(input)){
    return "Sure.";
  }
  else {
    return "Whatever.";
  }
};
  
Bob.prototype.tones = {
  isSilent : function(input){
    return input.trim() === "";
  },

  isScreaming : function(input) {
    return isUpcase(input) && hasLetters(input);
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

module.exports = Bob;