const number = +prompt("enter number");
let simple = number > 1;
  for (let i = 2; i < number && simple; i++) {
    if (number % i === 0) simple = false;
}
console.log(`${number} ${simple ? "simple" : "not simple"}`);