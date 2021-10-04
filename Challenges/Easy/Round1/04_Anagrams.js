"use strict";

class Anagram {
  constructor(anagram) {
    this.gram = anagram;
  }
  
  match(possibleGrams){
    let theGram = this.gram.toLowerCase().split("").sort();
    
    let matchingGrams = possibleGrams.filter(gram => {
      let compareVersion = gram.toLowerCase().split("").sort();
      return (arraysAreEqual(theGram, compareVersion) && this.gram.toLowerCase() !== gram.toLowerCase());
    });
    
    function arraysAreEqual(arr1, arr2){
      if(arr1.length !== arr2.length) {
        return false;
      }
      for(let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]){
          return false;
        }
      }
      return true;
    }
    return matchingGrams;
  }
}

module.exports = Anagram;