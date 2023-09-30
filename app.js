let currentTime = new Date();
let h5 = document.querySelector("h5");

function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let currentDay = days[date.getDay()];
  let currentHour = date.getHours();
  let currentMinutes = date.getMinutes();
  h5.innerHTML = `${currentDay}, ${currentHour}:${currentMinutes}`;
}
formatDate(currentTime);

function changeTemp(response) {
  let h3 = document.querySelector("h3");
  let temperature = Math.round(response.data.main.temp);
  h3.innerHTML = `${temperature}°C`;
  let h2 = document.querySelector("h2");
  h2.innerHTML = response.data.sys.country;
}

function showCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = cityInput.value;

  let selectCity = document.querySelector("#city-form");
  selectCity.addEventListener("click", showCity);

  let apiKey = "1a6432c5ca7b6f9b0bee45c98d54ea71";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`;

  console.log(apiUrl);
  axios.get(apiUrl).then(changeTemp);
}

showCity(event);
