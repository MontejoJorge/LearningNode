const argv = require("yargs")
    .options({
        "n1": {
            alias: "numero1",
            demandOption: true,
            type: "number",
            desc: "Primer numero para la operacion a realizar"
        },
        "n2" : {
            alias: "numero2",
            demandOption: true,
            type: "number",
            desc: "Segundo numero para la operacion a realizar"
        },
        "o" : {
            alias: "operacion",
            demandOption: true,
            choices: ["s", "r", "m", "d"],
            type: "string",
            desc: "Operacion a realizar (suma, resta, multiplicaion, division)"
        }
    })
    .argv

module.exports = argv;