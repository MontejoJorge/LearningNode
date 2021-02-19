const md5 = require("md5");
const {
    input,
    checkboxGenero,
    password,
    pausa
} = require("../helpers/inquirer");
require("colors")


const login = async (cuentas) => {

    const username = await input("Introduce el nombre de usuario");

    const contrasena = await input("Introudce la contraseña");

    const cuenta = cuentas.listaUsuarios.find( cuenta =>
        cuenta.username == username && cuenta.contrasena == md5(contrasena)
    );

    if (cuenta) {
        //logueado
        console.log(`\nHas iniciado sesion correctamente\n`.green);
    } else {
        console.log(`\nEl usuario o la contraseña no son correctos\n`.red);
    }

    await pausa();
}

module.exports = {
    login
}