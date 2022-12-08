let now = new Date();

let currentDate = document.querySelector("#date");
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

let hour = now.getHours();
let minute = now.getMinutes();

currentDate.innerHTML = `${day}, ${hour}:${minute}`;

//SearchBox for city and temp
function displayCurrentConditon(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector(".temp-1").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML =
    response.data.main.humidity + "°C";
}
function search(event) {
  event.preventDefault();
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=`;
  let city = document.querySelector("#city-input").value;
  let apiKey = "&appid=50fa4024e3b1d5eac2f51ab18a47e997";
  let apiOpts = "&&units=metric";

  let file = apiUrl + city + apiKey + apiOpts;
  axios.get(file).then(displayCurrentConditon);

  // an idea from another weather app sample to just changing the bkgd - credits goes to https://mdbootstrap.com/snippets/standard/ascensus/2869569
}
let form = document.querySelector("#search_form");
form.addEventListener("click", search);

//Temperatures
function toggleTemperatureF(event) {
  event.preventDefault();
  let fTemp = document.querySelector(".condition");
  fTemp.innerHTML = "49 F";
}
let toggleToTempF = document.querySelector(".temp-1");
toggleToTempF.addEventListener("click", toggleTemperatureF);

function toggleTempureC(event) {
  event.preventDefault();
  let cTemp = document.querySelector(".°c");
  cTemp.innerHTML = "11 C";
}
let toggleToTempC = document.querySelector(".temp-1");
toggleToTempC.addEventListener("click", toggleTempureC);
//Current Location
function showPosition(response) {
  let h1 = document.querySelector("h1");
  h1.innerHTML = `Your location is ${response.coords.latitude} , ${response.coords.longitude}`;
}

// Location
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}
let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);
