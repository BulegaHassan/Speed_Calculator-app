"use strict";

const speed = {
    distance: 0,
    time: 0,
    get isValid() {
        if (isNaN(this.distance) || isNaN(this.time)) {
            return false;
        } else if (this.distance <= 0 || this.time <= 0) {
            return false;
        } else {
            return true;
        }
    },
    calculate() {
        return this.distance / this.time;
    },
    convertSpeed() {
        return (this.distance / this.time) / 3.6;
        //   return (this.calculate) / 3.6
    }
};