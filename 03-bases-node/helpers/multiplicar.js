const { rejects } = require("assert");
const fs = require("fs");

const crearArchivo = async(base = 5) => {

    try {
        let salida = "";

        for (let i = 1; i <= 10; i++) {
            salida += `${base}x${i}=${base * i}\n`;
        }

        let nombreArchivo = `tabla-${base}.txt`;

        fs.writeFileSync(nombreArchivo, salida)

        return nombreArchivo;
    } catch (err) {
        throw err
    }

}
/*
const crearArchivo = (base = 5) => {

    return new Promise((resolve, rejects) => {

        let salida = "";

        for (let i = 1; i <= 10; i++) {
            salida += `${base}x${i}=${base * i}\n`;
        }

        let nombreArchivo = `tabla-${base}.txt`;

        fs.writeFile(nombreArchivo, salida, (err) => {

            if (err) rejects(err);

            resolve(nombreArchivo);
        })

    })
}
*/

module.exports = {
    crearArchivo, //crearArchivo: crearArchivo
}