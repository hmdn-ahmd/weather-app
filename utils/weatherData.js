const request = require("request-promise");


const openWeatherApp = {
    BASE_URL : "https://api.openweathermap.org/data/2.5/weather?q=",
    SECRET_KEY : "4f46f4842617e0f924da048c7f9fc419"
}

const  weatherData = (address, callback) => {
    const url = openWeatherApp.BASE_URL +
        encodeURIComponent(address) +
        "&APPID=" +
        openWeatherApp.SECRET_KEY;
    console.log("url: ", url);
    request({ url, json: true }, (error, data) => {
        if (error) {
            callback(true, "unable to fetch data," + error);
        }
        callback(false, data.body);
    });
};

module.exports = weatherData;