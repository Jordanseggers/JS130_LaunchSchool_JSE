const MIN_PER_HOUR = 60;
const HOUR_PER_DAY = 24;

class Clock {
  constructor (hour = 0, min = 0) {
    this.hour = hour;
    this.min = min;
  }

  add (min) {
    let newMin = this.min + min;
    let hoursToAdd = (Math.floor(newMin / MIN_PER_HOUR));
    newMin -= (60 * hoursToAdd);
    this.min = newMin;
    this.addHour(hoursToAdd);
    return this;
  }

  addHour (numOfHours) {
    let newHour = this.hour + numOfHours;
    while (newHour > 24) {
      newHour -= 24;
    }
    if (newHour === 24) {
      if (this.min > 0) {
        newHour = 0;
      }
    }
    this.hour = newHour;
  }

  subtract (min) {
    let hoursToSubtract = Math.floor(min / MIN_PER_HOUR);
    let minToSubtract = min - (hoursToSubtract * MIN_PER_HOUR);
    if (this.min === 0 && minToSubtract > 0) {
      this.min = 60;
      hoursToSubtract += 1;
    }
    let newMin = this.min - minToSubtract;

    if (newMin < 0) {
      hoursToSubtract += 1;
    }
    this.min = Math.abs(newMin);
    this.subtractHours(hoursToSubtract);
    return this;
  }

  subtractHours(numOfHours) {
    let newHours = this.hour - numOfHours;
    console.log(newHours);
    if (newHours >= 0) {
      this.hour = newHours;
    } else if (newHours > -24 && newHours < 0) {
      this.hour = 24 + newHours;
    } else if (newHours < -24) {
      let posNewHours = Math.abs(newHours);
      while (posNewHours > 24) {
        posNewHours -= 24;
      }
      this.hour = 24 - posNewHours;
    }
  }

  toString() {
    let time = "";

    if (this.hour <= 9) {
      time += `0${this.hour}`;
    } else {
      time += `${this.hour}`;
    }

    if (this.min <= 9) {
      time += `:0${this.min}`;
    } else {
      time += `:${this.min}`;
    }
    return time;
  }

  isEqual(clockObj) {
    if (this.hour === clockObj.hour && this.min === clockObj.min) {
      return true;
    } else {
      return false;
    }
  }
}

Clock.at = function (hour, min) {
  return new Clock(hour, min);
};


module.exports = { Clock, MIN_PER_HOUR, HOUR_PER_DAY };