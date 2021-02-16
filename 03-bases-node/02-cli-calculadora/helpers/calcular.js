const calcular = async(a, b, operacion) => {
    try {
        switch (operacion) {
            case "s":
                return a+b;
            case "r":
                return a-b;
            case "m":
                return a*b;
            case "d":
                if (b==0) {
                    throw "No se puede dividir por 0"
                }
                return a/b;
        }
    } catch (err) {
        throw err
    }
}

module.exports = calcular;