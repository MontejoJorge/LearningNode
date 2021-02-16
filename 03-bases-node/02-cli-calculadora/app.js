const calcular = require("./helpers/calcular");
const argv = require("./config/yargs");

console.clear();

calcular(argv.n1, argv.n2, argv.o)
    .then((resultado) => {
        console.log(argv.n1, frase(argv.o), argv.n2, "=", resultado);
    })
    .catch(err => console.log("ERROR:", err));

const frase = (operacion) => {
    switch (operacion) {
        case "s":
            return "mas";
        case "r":
            return "memps";
        case "m":
            return "multiplicado por";
        case "d":
            return "dividido entre";
    }
}