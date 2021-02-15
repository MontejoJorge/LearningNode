const { number } = require("yargs");

const argv = require("yargs")
    .options({
        "b": {
            alias: "base",
            type: "number",
            demandOption: true,
            describe: "Indica la base a multiplicar"
        },
        "l": {
            alias: "listar",
            type: "boolean",
            default: false,
            describe: "Si se especifia, mostrara la tabla e la consola"
        },
        "h": {
            alias: "hasta",
            type: number,
            default: 10,
            describe: "Indica el multiplicador"
        }
    })
    .check((argv, options) => {
        if (isNaN(argv.base)) {
            throw "La base tiene que ser un numero";
        }
        return true;
    })
    .argv

module.exports = argv;