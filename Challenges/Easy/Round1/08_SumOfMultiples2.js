class SumOfMultiples {
  constructor(...multiples) {
    this.multiples = (multiples.length > 0) ? multiples : [3, 5];
  }

  static to(num) {
    let obj = new SumOfMultiples();
    return obj.to(num);
  }

  to(num) {
    let addends = [];

    for (let currentNum = 1; currentNum < num; currentNum++) {
      if (this.anyMultiple(currentNum)) {
        addends.push(currentNum);
      }
    }

    return addends.reduce((acc, addend) => acc + addend, 0);
  }

  anyMultiple(num) {
    return this.multiples.some(multiple => {
      return num % multiple === 0;
    });
  }
}

module.exports = SumOfMultiples;