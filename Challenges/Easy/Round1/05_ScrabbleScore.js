"use strict";

class Scrabble {
  constructor(value){
    this.scrabble = value;
  }
  
  createScoresObj(){
    let scores = {};
  
    function assignValues(string, value) {
      string.split("").forEach(letter => {
        scores[letter] = value;
      });
    }
  
    assignValues("AEIOULNRST", 1);
    assignValues("DG", 2);
    assignValues("BCMP", 3);
    assignValues("FHVWY", 4);
    assignValues("K", 5);
    assignValues("JX", 8);
    assignValues("QZ", 10);
  
    return scores;
  }
  
    
  score(optionalValue){
    let scrabbleWord = this.scrabble;
    let key = this.createScoresObj();
    if (scrabbleWord === null || scrabbleWord === undefined || scrabbleWord.match(/^\s*$/)){
      return 0;
    }
    let values = scrabbleWord.toUpperCase().split("").map(letter => {
      if(key[letter]){
        return key[letter];
      } else {
        return 0;
      }
    });
    return values.reduce((previousValue, currentValue) => previousValue + currentValue);
  }
}

Scrabble.score = function (word){
    let scrabbleWord = word;
    let key = Scrabble.prototype.createScoresObj();
    if (scrabbleWord === null || scrabbleWord === undefined || scrabbleWord.match(/^\s*$/)){
      return 0;
    }
    let values = scrabbleWord.toUpperCase().split("").map(letter => {
      if(key[letter]){
        return key[letter];
      } else {
        return 0;
      }
    });
    return values.reduce((previousValue, currentValue) => previousValue + currentValue);
  };

module.exports = Scrabble;