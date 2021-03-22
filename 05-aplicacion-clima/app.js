require('dotenv').config();
const { default: axios } = require("axios");
const { leerInput, inquirerMenu, pausa, listarLugares } = require("./helpers/inquirer");
const Busquedas = require("./models/Busquedas");

const main = async() => {

    const busquedas = new Busquedas();
    let opcion;

    do {
        
        opcion = await inquirerMenu();

        switch (opcion) {
            case 1:
                const termino = await leerInput("Ciudad: ");
                const lugares = await busquedas.ciudad(termino);

                const id = await listarLugares(lugares);
                const lugarSel = lugares.find( l => l.id === id);
                
                const clima = await busquedas.climaLugar(lugarSel.lat,lugarSel.lng);

                //Mostrar resultados
                console.log("\n Informacion de la ciudad\n");
                console.log("Ciudad: ", lugarSel.nombre);
                console.log("Latitud: ", lugarSel.lat);
                console.log("Longitud: ", lugarSel.lng);
                console.log("Tiempo: ", clima.desc);
                console.log("Temperatura: ", clima.temp);
                console.log("Maxima: ", clima.max_temp);
                console.log("Minima: ", clima.min_temp);
                break;
        
            case 2:
            
                break;
        }

        if (opcion !== 0 ) await pausa();

    } while (opcion!==0);

}


main();