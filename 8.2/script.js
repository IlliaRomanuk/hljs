function multiplication(a) {
  return (b) => {
    return (c) => {
      return a * b * c;
    };
  };
}
console.log(multiplication(3)(2)(7));

function addition(a) {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
}
console.log(addition(3)(2)(7));
