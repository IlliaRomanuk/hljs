const array = [1, 3, 4, 6, 2, 5, 7, 4];
function removeElement(massive, num) {
  let newArray = massive.filter((char) => char !== num);
  console.log(newArray);
}
removeElement(array, 4);
