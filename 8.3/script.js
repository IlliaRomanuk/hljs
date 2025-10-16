for (let i = 0; i <= 10; i++) {
  let message = prompt("Enter a number greater than 100");
  if (+message > 100) {
    console.log(message);
    break;
  } else {
    alert("enter again");
  }
}
