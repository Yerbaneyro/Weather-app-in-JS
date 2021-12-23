const notificationelem = document.querySelector(".notification");
const iconelem = document.querySelector(".weather_icon");
const temperatureelem = document.querySelector(".temperature p");
const tempdescriptionelem = document.querySelector(".temperature_description p");
const locationelem = document.querySelector(".location p");

const weather = {

    temperature : {
        value : 18,
        unit : "celsius"
    },

    description : "few clouds",
    iconId : "01d",
    city : "London",
    country : "GB"
};