var Bob = function() {
  this.hey = function(input){
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
  
  var isSilent = function(input){
    return input.trim() === "";
  };

  var isScreaming = function(input) {
    return isUpcase(input) && hasLetters(input);
  };

  var isUpcase = function(input) {
    return input === input.toUpperCase();
  };

  var hasLetters = function(input) {
    return input.match(/[a-zA-Z]/);
  };

  var isQuestion = function(input) {
    return input.trim().slice(-1) === "?";
  };
};

module.exports = Bob;