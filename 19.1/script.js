const feather = document.querySelector("#feather");
const temp = document.querySelector("#temp");
const form = document.querySelector("#form");
let latitude =  46.486;
let longitude = 30.728;
form.addEventListener("click", function (event) {
  switch (event.target.id) {
    case "odessa":
      latitude = 46.486;
      longitude = 30.728;
      break;
    case "kyiv":
      latitude = 50.4501;
      longitude = 30.5234;
      break;
    case "Lviv":
      latitude = 49.8358;
      longitude = 24.0193;
      break;
  }
});
function getInfoFeather() {
  const apiFeather = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=f63648ed528823f89bdd27690c3b6774`
  );
  apiFeather
    .then((response) => response.json())
    .then((data) => {
      feather.textContent = `Температура: ${(data.main.temp - 273.15).toFixed(1)}°C`;
      temp.textContent = `Погода: ${data.weather[0].description}`;
    })
    .catch((err) => console.error("Ошибка:", err));
}
getInfoFeather();
const button = document.querySelector("#button");
button.addEventListener("click", getInfoFeather);
