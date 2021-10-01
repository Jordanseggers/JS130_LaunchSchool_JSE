class RomanNumeral {
  constructor (regNum) {
    this.number = regNum;
  }
  
  toRoman() {
    let regNumArr = [...String(this.number)];
    let romanReturn = [];
    
    function transformPlace(ifNine, ifFive, ifOne){
      let place = regNumArr.shift();
      console.log(place);
      if(place === 9) {
        romanReturn.push(ifNine);
      } else if (place > 5){
        romanReturn.push(ifFive);
        let difference = place - 5;
        for(let i = difference; i > 0; i--){
          romanReturn.push(ifOne);
        }
      } else if (place === 5){
        romanReturn.push(ifFive);
      } else if (place === 4){
        romanReturn.push(ifOne);
        romanReturn.push(ifFive);
      } else if (place < 4 && place > 0){
        for(let i= place; i > 0; i--){
          romanReturn.push(ifOne);
        }
      }
    }
    
    if(regNumArr.length > 3) {
      let mCount = regNumArr.shift();
      for(let i = 0; i <= mCount; i++) {
        romanReturn.push("M");
      }
    }
    if(regNumArr.length > 2){
      transformPlace("CM", "D", "C");
    }
    if(regNumArr.length > 1){
      transformPlace("XC", "L", "X");
    }
    if(regNumArr.length > 0){
      transformPlace("IX", "V", "I");
    }
    return romanReturn.join("");
  }
}

RomanNumeral.key = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
};

module.exports = RomanNumeral;