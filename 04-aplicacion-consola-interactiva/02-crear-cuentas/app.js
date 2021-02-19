const { menu, pausa } = require("./helpers/inquirer");
const { readUsers, writeUsers } = require("./helpers/storage");
const { login } = require("./helpers/functions");
const Cuenta = require("./models/Cuenta");
const Cuentas = require("./models/Cuentas");


const main = async () => {

    let option = "";

    const cuentas = new Cuentas();

    const usersDB = readUsers();

    if (usersDB) {
        cuentas.cargarCuentas(usersDB);
    }

    do {
        option = await menu();

        switch (option) {
            case 1:
                await cuentas.crearCuenta();
                break;

            case 2:
                await login(cuentas);
                break;
        }


    } while (option != 0);

    writeUsers(cuentas.listaUsuarios);
}


main();