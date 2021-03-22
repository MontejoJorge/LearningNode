const axios = require('axios');

class Busquedas {

    historial = ["Miranda de ebro", "Vitoria"];

    constructor() {
        //TODO leer DB si existe
    }

    get paramsMapbox(){
        return {
            "access_token": process.env.MAPBOX_KEY,
            "limit": 5,
            "language": "es"
         }
    }

    async ciudad( lugar ) {
        
        try {
            //petcicion http
            const instance = axios.create({
               baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
               params: this.paramsMapbox
            });

            
            const resp = await instance.get();

            return resp.data.features.map( lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1],
            }));

        } catch (error) {
            return [];
        }
    }

    async climaLugar( lat, lon) {

        try {
            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: {
                    lat,
                    lon,
                    appid: process.env.OPENWEATHER_KEY,
                    units: "metric",
                    lang: "es",
                }
            });

            const resp = await instance.get();

            return {
                desc: resp.data.weather[0].description,
                temp: resp.data.main.temp,
                max_temp: resp.data.main.temp_max,
                min_temp: resp.data.main.temp_min,
            }
            
        } catch (error) {
            return [];
        }
    }

}

module.exports = Busquedas;