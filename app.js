// ELEMENTS
const notificationelem = document.querySelector(".notification");
const iconelem = document.querySelector(".weather_icon");
const temperatureelem = document.querySelector(".temperature p");
const tempdescriptionelem = document.querySelector(".temperature_description p");
const locationelem = document.querySelector(".location p");

//APP
const weather = {};

weather.temperature = {
    unit : "celsius"
}


//APP CONSTS and VARS
const KELVIN = 273;

//API KEY
const key = "08cedafadf5af89252f0585c1ece9d09";

if ('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
    notificationelem.getElementsByClassName.display ="block";
    notificationelem.innerHTML = `<p>Browser doesn't support geolocation.</p>`;
}
//User position
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeather(latitude, longitude);
}

//Error Geolocation
function showError(error){
    notificationelem.getElementsByClassName.display ="block";
    notificationelem.innerHTML = `<p>${error.message}</p>`;
}

// GET WEATHER FROM API
function getWeather(latitude, longitude){
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

    fetch(api)
        .then(function(response){
            let data =  response.json();
            return data;
        })
        .then(function(data){
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].description;
            weather.iconID = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
        })
        .then(function(){
            displayWeather();
        });
}
//Displey weather
function displayWeather(){
    iconelem.innerHTML = `<img src="icons/${weather.iconID}.png">`;
    temperatureelem.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    tempdescriptionelem.innerHTML = weather.description;
    locationelem.innerHTML = `${weather.city}, ${weather.country}`;
}

function CtoF(temperature){
    return (temperature * 9/5) + 32;
}

temperatureelem.addEventListener("click", function(){
    if(weather.temperature.value === undefined) return;

        if(weather.temperature.unit =="celsius"){
            let fahrenheit = CtoF(weather.temperature.value);
            fahrenheit = Math.floor(fahrenheit);
            temperatureelem.innerHTML = `${fahrenheit}°<span>F</span>`;
            weather.temperature.unit = "fahrenheit";

        }else{
            temperatureelem.innerHTML = `${weather.temperature.value}°<span>C</span>`;
            weather.temperature.unit = "celsius";
        }
})

// NOTES

//     temperature : {
//         value : 18,
//         unit : "celsius"
//     },

//     description : "few clouds",
//     iconId : "01d",
//     city : "London",
//     country : "GB"




