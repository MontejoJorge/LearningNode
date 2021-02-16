const inquirer = require("inquirer");
require("colors");

const preguntas = [
    {
        type: "list",
        name: "opcion",
        message: "¿Que desea hacer?",
        pageSize: 7,
        loop: false,
        choices: [{
            value: "1",
            name: `${"1.".green} Crear tarea`
        },
        {
            value: "2",
            name: `${"2.".green} Listar tareas`
        },
        {
            value: "3",
            name: `${"3.".green} Listar tareas completadas`
        },
        {
            value: "4",
            name: `${"4.".green} Listar tareas pendientes`
        },
        {
            value: "5",
            name: `${"5.".green} Completar tareas`
        },
        {
            value: "6",
            name: `${"6.".green} Borrar tareas`
        },
        {
            value: "0",
            name: `${"0.".green} Salir`
        },
    ]
    }
];

const inquirerMenu = async() => {
    console.clear();
    
    console.log("==============================".green);
    console.log("    Selecciona una opcion    ".yellow);
    console.log("==============================\n".green);

    //desestructuramos el atributo opcion, el name del array preguntas
    const {opcion} = await inquirer.prompt(preguntas)

    return opcion;
}

const pausa = async() => {

    const pausaOpt = [
        {
            type: "input",
            name: "pausaOpt",
            message: `\nPresione ${"ENTER".green} para continuar\n`,
        }
    ];

    await inquirer.prompt(pausaOpt);
}

const leerInput = async(message) => {
    const question = [
        {
            type: "input",
            name: "desc",
            message, //message: message
            validate(value) {
                if (value.length === 0) {
                    return "Por favor Introduce un valor"
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);

    return desc;
}


module.exports = {
    inquirerMenu,
    pausa,
    leerInput
}