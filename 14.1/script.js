const imgFlower = document.querySelector("#imgFlower");
const imgMixer = document.querySelector("#imgMixer");
const imgTurtle = document.querySelector("#imgTurtle");
const buttonPref = document.querySelector("#pref");
const buttonNext = document.querySelector("#next");
const images = [imgFlower, imgMixer, imgTurtle];
let index = 0;
function updateGallery() {
    images.forEach((img, i) => {
      img.style.display = i === index ? "block" : "none";
    });
    buttonPref.style.display = index === 0 ? "none" : "block";
    buttonNext.style.display = index === images.length -1 ? "none" : "block";
  }
buttonPref.addEventListener("click", function () {
  if(index > 0){
    index--;
    updateGallery();
  }
});
buttonNext.addEventListener("click", function () {
  if(index < images.length - 1){
  index++;
  updateGallery();
  }
});