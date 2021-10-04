Math.seedrandom = require('seedrandom');

class Robot {
  constructor() {
    this.currentName = undefined;
  }

  name () {
    if (this.currentName !== undefined) {
      return this.currentName;
    }

    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let numbers = "0123456789".split("");
    let name = "";

    for (let idx = 0; idx < 2; idx++) {
      name += alphabet[this.randomNum(alphabet.length)];
    }

    for (let idx = 0; idx < 3; idx++) {
      name += numbers[this.randomNum(9)];
    }

    while (Robot.usedNames.includes(name)) {
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