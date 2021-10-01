Math.seedrandom = require('seedrandom');
const NAME_REGEXP = /^[A-Z]{2}\d{3}$/;
const DIFFERENT_ROBOT_NAME_SEED = 1234;
const SAME_INITIAL_ROBOT_NAME_SEED = 1000;

class Robot {
  constructor() {
    this.currentName = undefined;
  }
  
  name () {
    if(this.currentName !== undefined){
      return this.currentName;
    }
    
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let numbers = "0123456789".split("");
    let name = "";
    
    for(let i = 0; i < 2; i++){
      name += alphabet[this.randomNum(alphabet.length)];
    }
    
    for(let i = 0; i < 3; i++){
      name += numbers[this.randomNum(9)];
    }
    
    while(Robot.usedNames.includes(name)){
      name = name.slice(0, 4) + numbers[this.randomNum(9)];
    }
    
    this.currentName = name;
    Robot.usedNames.push(name);
    return name;
  }
  
  reset() {
    this.currentName = undefined;
  }
  
  randomNum(max) {
    return (Math.floor(Math.random() * max));
  }
}

Robot.usedNames = [];


module.exports = Robot;