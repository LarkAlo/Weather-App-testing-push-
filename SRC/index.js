//date
function formatDate() {
  let now = new Date();
  let date = now.getDate();
  let year = now.getFullYear();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[now.getMonth()];
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let today = document.querySelector("#date");
  today.innerHTML = ` ${day} ${month} ${date}, ${year} | ${hours}:${minutes}`;
}
formatDate();

//search
function searchCity(event) {
  event.preventDefault();
  let currentCity = document.querySelector("#search-city-input");
  let newCity = document.querySelector("#city");
  newCity.innerHTML = currentCity.value;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);

//search for city
function searchCity(event) {
  event.preventDefault();
  let apiKey = "667d9f573c8af4c33457be5d561a9148";
  let cityName = document.querySelector("#search-city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showWeather);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);

// show weather
function showWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
}
