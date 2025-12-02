const feather = document.querySelector("#feather");
const temp = document.querySelector("#temp");
const form = document.querySelector("#form");
let latitude = 46.486;
let longitude = 30.728;
const cordinates = {
  odessa: {
    latitude: 46.486,
    longitude: 30.728,
  },
  kyiv: {
    latitude: 50.4501,
    longitude: 30.5234,
  },
  Lviv: {
    latitude: 49.8358,
    longitude: 24.0193,
  },
};
form.addEventListener("click", function (event) {
  const sity = cordinates[event.target.id];
  if (sity) {
    longitude = sity.longitude;
    latitude = sity.latitude;
  }
});
function getInfoFeather() {
  const apiFeather = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=f63648ed528823f89bdd27690c3b6774`
  );
  apiFeather
    .then((response) => response.json())
    .then((data) => {
      feather.textContent = `Температура: ${(data.main.temp - 273.15).toFixed(
        1
      )}°C`;
      temp.textContent = `Погода: ${data.weather[0].description}`;
    })
    .catch((err) => console.error("Ошибка:", err));
}
getInfoFeather();
const button = document.querySelector("#button");
button.addEventListener("click", getInfoFeather);
