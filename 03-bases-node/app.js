const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");

console.clear();

//yargs crea un objeto con los argumentos
//console.log("La base es", argv.base);

crearArchivo(argv.base, argv.listar, argv.hasta)
    .then(nombreArchivo => console.log(nombreArchivo.blue, "creado".yellow))
    .catch(err => console.log(err))