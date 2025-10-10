let yousersString = prompt("enter string");
let arr = [];
while (true) {
  let letter = prompt("enter letter");
  if (!letter) break;
  arr.push(letter);
}
function deleteLatters(str, symbols) {
  let result = str
    .split("")
    .filter((char) => !symbols.includes(char))
    .join("");
  console.log("Result:", result);
  alert(result);
}
deleteLatters(yousersString, arr);
