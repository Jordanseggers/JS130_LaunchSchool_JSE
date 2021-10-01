"use strict";

class RomanNumeral {
  constructor(regNum) {
    this.number = regNum;
  }
  
  toRoman(){
    let numArr = [...String(this.number)];
    let onesPlace = { 1: "I", 4: "IV", 5: "V", 9: "IX" };
    let tensPlace = { 1: "X", 4: "XL", 5: "L", 9: "XC" };
    let hundredthsPlace = { 1: "C", 4: "CD", 5: "D", 9: "CM" };
    let thousandsPlace = { 1: "M" };
    
    let order = [thousandsPlace, hundredthsPlace, tensPlace, onesPlace].reverse();
    let romanReturn = [];
    
    let convertNumber = function(digit, place){
      if(Object.keys(place).includes(String(digit))) {
        romanReturn.push(place[digit]);
      } else if (digit < 4) {
        romanReturn.push(place["1"].repeat(digit));
      } else {
        romanReturn.push(place["5"]);
        let remainder = digit - 5;
        romanReturn.push(place["1"].repeat(remainder));
      }
    };
    
    for (let i = 0; i < numArr.length; i++) {
      let placeToUse = numArr.length - 1;
      romanReturn.push(convertNumber(numArr[i], order[placeToUse]));
      placeToUse -= 1;
    }
  }
}

let testy = new RomanNumeral(3125);
console.log(testy.toRoman());