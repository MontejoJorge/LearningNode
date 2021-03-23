const fs = require("fs");

const axios = require('axios');

class Busquedas {

    historial = [];
    dbPath = "./db/database.json";

    constructor() {
        this.leerDB();
    }

    get historialInitCap(){
        return this.historial.map( lugar=> {

            let palabras = lugar.split(" ");
            palabras = palabras.map( p => p[0].toUpperCase() + p.substring(1) );

            return palabras.join(" ");
        })
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

            const { weather, main } = resp.data;

            return {
                desc: weather[0].description,
                temp: main.temp,
                max_temp: main.temp_max,
                min_temp: main.temp_min,
            }
            
        } catch (error) {
            return [];
        }
    }

    agregarHistorial( lugar ) {
        
        if (this.historial.includes( lugar.toLocaleLowerCase() )){
            return null;
        }

        this.historial = this.historial.splice(0,5);

        this.historial.unshift(lugar.toLocaleLowerCase() );

        //Guardamos en la "base de datos"
        this.guardarDB();
    }

    guardarDB(){
        const payload = {
            historial: this.historial
        }

        fs.writeFileSync( this.dbPath, JSON.stringify(payload) );
    }

    leerDB(){
        if (!fs.existsSync(this.dbPath)){
            return null;
        }

        const data = JSON.parse( fs.readFileSync(this.dbPath, {encoding: "utf-8"}) );

        if (data){
            this.historial = data.historial;
        }
    }
}

module.exports = Busquedas;