const userNumber = prompt("write a three digit number");
const firstDigit = userNumber[0];
const secondDigit = userNumber[1];
const thirdDigit = userNumber[2];
if (+firstDigit === +secondDigit && +firstDigit === +thirdDigit){
    alert("all numbers are the same");
}
else if (+firstDigit === +secondDigit || +firstDigit === +thirdDigit || +secondDigit === +thirdDigit){
    alert("There are identical numbers in the middle of the numbers.");
}
else{
    alert("no identical numbers");
}