const { read, promises } = require("fs");
const { resolve } = require("path");

require("colors");

const mostarMenu = () => {

    return new Promise ( resolve => {
        console.clear();

        console.log("==============================".green);
        console.log("    Selecciona una opcion    ".yellow);
        console.log("==============================\n".green);
        
        console.log(`${"1.".green} Crear tarea`);
        console.log(`${"2.".green} Listar tareas`);
        console.log(`${"3.".green} Listar tareas completadas`);
        console.log(`${"4.".green} Listar tareas pendientes`);
        console.log(`${"5.".green} Completar tareas`);
        console.log(`${"6.".green} Borrar tareas`);
        console.log(`${"0.".green} Salir`);
    
        const readLine = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readLine.question(" Seleccione una opcion: ", (opt)=>{
            readLine.close();
            resolve(opt);
        })
    })
}

const pausa = () => {

    return new Promise ( resolve => {
        const readLine = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readLine.question(`\nPresione ${"ENTER".green} para continuar\n`, (opt)=>{
            readLine.close();
            resolve(opt);
        })
    })
}


module.exports = {
    mostarMenu,
    pausa
}