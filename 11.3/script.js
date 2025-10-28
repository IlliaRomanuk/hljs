window.addEventListener("load", function () {
    let image = document.querySelector("#img");
  let random = Math.floor(Math.random() * 9);
  image.setAttribute("src", `image/${random}.jpg`);
});
