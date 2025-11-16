class Coach {
  constructor(name, specialisation, rating) {
    this.name = name;
    this.specialisation = specialisation;
    this.rating = rating;
  }
  displayInfo() {
    console.log(
      `Coach: ${this.name}, Specialization: ${this.specialisation}, Rating: ${this.rating}`
    );
  }
}
const coach1 = new Coach("John Doe", "Fitness", 4.5);
const coach2 = new Coach("Alice Smith", "Yoga", 4.9);
coach1.displayInfo();
coach2.displayInfo();
