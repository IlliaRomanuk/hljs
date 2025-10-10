let arr = [2, true, null, undefined, {}, 10];
function getSum() {
  let numbers = arr.filter((num) => typeof num === "number");
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i] / 2;
  }
  console.log(sum);
}
getSum();
