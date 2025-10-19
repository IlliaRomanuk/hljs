// let step = 0;
let ladder = {
  step: 0 ,
  up: function () {
    // підніматиме вас на одну сходинку
    let addition = ++this.step;
    return this;
  },
  down: function () {
    // опускатиме вас на одну сходинку
    let takeAway = --this.step;
    return this;
  },
  showStep: function () {
    // показує поточну сходинку
    console.log(this.step);
    return this;
  },
};
ladder.up().up().down().showStep(); // 1