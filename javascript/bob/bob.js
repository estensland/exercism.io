var Bob = function() {
  this.hey = function(input){
    if (input.trim() === "") {
      return "Fine. Be that way!";
    }
    else if(input === input.toUpperCase() && input.match(/[a-zA-Z]/)){
      return "Woah, chill out!";
    }
    else if(input.trim().slice(-1) === "?"){
      return "Sure.";
    }
    else {
      return "Whatever.";
    }

  };
  
  
};

module.exports = Bob;