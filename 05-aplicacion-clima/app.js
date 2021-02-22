require('dotenv').config();
const { default: axios } = require("axios");
const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer");
const Busquedas = require("./models/Busquedas");

const main = async() => {

    const busquedas = new Busquedas();
    let opcion;

    do {
        
        opcion = await inquirerMenu();

        switch (opcion) {
            case 1:
                const lugar = await leerInput("Ciudad: ");
                busquedas.ciudad(lugar);

                break;
        
            case 2:
            
                break;
        }

        if (opcion !== 0 ) await pausa();

    } while (opcion!==0);

}


main();