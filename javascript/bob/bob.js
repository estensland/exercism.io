var Bob = function() {
  this.hey = function(input){
    if (silenceCheck(input)) {
      return "Fine. Be that way!";
    }
    else if(screamingCheck(input)){
      return "Woah, chill out!";
    }
    else if(questionCheck(input)){
      return "Sure.";
    }
    else {
      return "Whatever.";
    }
  };
  
  var silenceCheck = function(input){
    return input.trim() === "";
  };

  var screamingCheck = function(input) {
    if (input === input.toUpperCase()){
      return letterCheck(input);
    }
  };

  var letterCheck = function(input) {
    return input.match(/[a-zA-Z]/);
  };

  var questionCheck = function(input) {
    return input.trim().slice(-1) === "?";
  };
};

module.exports = Bob;