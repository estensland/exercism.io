Beer = {
  verse : function(number) {
  result = []  
  result.push(number + " bottles of beer on the wall, 8 bottles of beer.\nTake one down and pass it around," + (number = number -1) + " bottles of beer on the wall.\n")
  result.push(number + " bottles of beer on the wall, " + number + " bottles of beer.\nTake one down and pass it around," + (number = number -1) + " bottles of beer on the wall.\n")
  return result.join("");
  }
}

console.log(Beer.verse(8))

module.exports = Beer;