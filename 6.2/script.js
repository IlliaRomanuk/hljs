const numbers = [1, 3, 5, 2, 10, 16, 135, 8];
const newArr = numbers
.filter((number) => number % 2 === 0)
.join();
console.log(newArr);