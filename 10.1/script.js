function getFiniteValue(company) {
  let salaries = [];
  let money = 0;
  getProp(company);

  function getProp(o) {
    for (let prop in o) {
      if (typeof o[prop] === "object") {
        getProp(o[prop]);
      } else if (prop === "salary") {
        salaries.push(o[prop]);
      }
    }
  }
  console.log(salaries);
  for (let i = 0; i < salaries.length; i++) {
    money += salaries[i];
  }
  console.log(money);
}
let company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],
  development: {
    web: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};
getFiniteValue(company);
