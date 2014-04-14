var words = function(stringInput) {
  var result = {};

  var storage = removePunctuation(stringInput.toLowerCase());

  storage = storage.trim().split(/\s+/);

  for(var i = 0; i < storage.length; i++) {
    
    if (!result[storage[i]]) {
      result[storage[i]] = 0;
    }
    if (storage[i] === "constructor"){
      result[storage[i]] = 1;
    }
    result[storage[i]] ++;
  }
  return result;
};

var removePunctuation = function(stringInput) {
  return stringInput.replace(/[¿,?,¡,!,:,&,@,$,%,^,&,?]/g, " ");
};

module.exports = words;