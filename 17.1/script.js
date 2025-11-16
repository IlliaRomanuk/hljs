class Calculator {
    add(firstNumber, secondNumber){
        console.log(firstNumber + secondNumber);
    }
    subtract(firstNumber, secondNumber){
        console.log(firstNumber - secondNumber);
    }
    multiply(firstNumber, secondNumber){
        console.log(firstNumber * secondNumber);
    }
    division(firstNumber, secondNumber){
        console.log(firstNumber / secondNumber);
    }
}
const calc = new Calculator;
calc.add(1,5);
calc.subtract(1,5);
calc.multiply(1,5);
calc.division(1,5);