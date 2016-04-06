var randomThing = require("./random.js");
var usdThing = require("./usd.js");

function getNumbers(){
  return usdThing(randomThing(100,1000000));

}

function getWords() {
  return "Account Balance: \n" + usdThing(randomThing(100,1000000));

}
exports.numbers=getNumbers;
exports.words=getWords;
