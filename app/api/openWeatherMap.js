import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=d8de442e265f955c706a6de99df5396e&units=metric';

module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(res => {
            if(res.data.cod && res.data.message) {
                throw new Error (res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, err => {
            throw new Error("Unable to fetch weather for that location.");
        });
    }
};