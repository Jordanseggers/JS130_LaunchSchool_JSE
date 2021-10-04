"use strict";

class Triangle {
  constructor(sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
    if(this.isInvalid()){
      throw new Error ("Triangle is invalid");
    }
  }
  
  isInvalid() {
    if(this.sideA === 0 || this.sideB === 0 || this.sideC === 0) {
      return true;
    } else if (Triangle.anyTwoSidesLessThanOne(this.sideA, this.sideB, this.sideC)){
      return true;
    } else {
    return false;
    }
  }
  
  kind(){
    if(this.isEquilateral()) {
      return "equilateral";
    } else if(this.isIsosceles()) {
      return "isosceles";
    } else {
      return "scalene";
    }
  }
  
  isEquilateral() {
    return (this.sideA === this.sideB && this.sideB === this.sideC);
  }
  
  isIsosceles(sideA, sideB, sideC) {
    return (this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC);
  }
}

Triangle.anyTwoSidesLessThanOne = function(sideA, sideB, sideC){
  return (((sideA + sideB) <= sideC) || ((sideA + sideC) <= sideB) || ((sideC + sideB) <= sideA))
}

module.exports = Triangle;

// let firstT = new Triangle(4, 4, 4);
// console.log(firstT.kind());