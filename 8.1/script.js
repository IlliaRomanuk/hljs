function getSum(){
let value = 0;
return function(number){
    value += number;
    return value;
}
}
const sum  = getSum();
console.log(sum(4)); // 4

console.log(sum(6)); // 10

console.log(sum(10)); // 20

console.log(sum(7)); // 27


