const inquirer = require("inquirer");
require("colors");

const menu = async() => {

    const questions = [
        {
            type: "list",
            name: "option",
            message: "Selecciona una opcion",
            pageSize: 10,
            loop: false,
            choices: [
                {
                    name: "Crear una cuenta",
                    value: 1
                },
                {
                    name: "Iniciar sesion",
                    value: 2
                },
                {
                    name: "Salir",
                    value: 0
                },
            ]
        }
    ];

    console.clear();

    console.log("==============================".green);
    console.log("    Selecciona una opcion    ".yellow);
    console.log("==============================\n".green);

    const { option } = await inquirer.prompt(questions);

    return option;
}

const input = async(msg) => {
    
    const questions = [
        {
            type: "input",
            name: "value",
            message: msg,
            validate(value) {
                if (value.length === 0) {
                    return "Debes introducir un valor"
                }

                return true;
            },
        }
    ];

    const { value } = await inquirer.prompt(questions);

    return value;
}

const checkboxGenero = async (msg) => {
    
    const questions = [
        {
            type: "list",
            name: "value",
            message: msg,
            choices: [
                {
                    name: "Hombre",
                    value: "H"
                },
                {
                    name: "Mujer",
                    value: "M"
                },
                {
                    name: "Otro",
                    value: "o"
                }
            ]
        }
    ];

    const { value } = await inquirer.prompt(questions);

    return value;
}

const password = async(msg) => {
    
    const questions = [
        {
            type: "password",
            name: "value",
            mask: true,
            message: msg,
        }
    ];

    const { value } = await inquirer.prompt(questions);

    return value;
}

const pausa = async() => {

    const questions = [
        {
            type: "input",
            name: "pausaOpt",
            message: `Presione ${"ENTER".green} para continuar\n`,
        }
    ];

    await inquirer.prompt(questions);
}



module.exports = {
    menu,
    input,
    checkboxGenero,
    password,
    pausa
}