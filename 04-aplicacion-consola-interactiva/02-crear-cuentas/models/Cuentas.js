const { v4: uuidv4 } = require("uuid");
const md5 = require('md5');

const Cuenta = require("./Cuenta");
const {
    input,
    checkboxGenero,
    password,
    pausa
} = require("../helpers/inquirer");


class Cuentas {
    cuentas = {};

    constructor() {
        this.cuentas = {};
    }

    get listaUsuarios() {
        const lista = [];

        Object.keys(this.cuentas).forEach( key => lista.push(this.cuentas[key]) );

        return lista;
    }

    crearCuenta = async() => {
        const nombre = await input("Introduce tu nombre:");
    
        const genero = await checkboxGenero("Selecciona tu genero:");
    
        const username = await input("Introduce tu nombre de usuario:");
    
        const contrasena = await password("Introduce tu contraseña:");
    
        const cuenta = new Cuenta(uuidv4(),nombre,genero,username,md5(contrasena));

        this.cuentas[cuenta.id] = cuenta;    
    }

    cargarCuentas = (usersDB) => {
        usersDB.forEach( user => this.cuentas[user.id]=user );
    }
}

module.exports = Cuentas;