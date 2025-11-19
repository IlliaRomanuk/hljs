let time = 360;
class timer {
  #intervalId;
  constructor(element) {
    this.element = document.querySelector(element);
  }
  showTime = () => {
    this.#intervalId = setInterval(() => {
      const minut = Math.floor(time / 60);
      const roundedMinute = minut.toString().padStart(2, "0");
      const second = +time % 60;
      const roundedSecond = second.toString().padStart(2, "0");
      this.element.textContent = `${roundedMinute}:${roundedSecond}`;
      time--;
      if (time < 0) {
        clearInterval(this.#intervalId);
      }
    }, 1000);
  };
}
const clock = new timer("p");
clock.showTime();
