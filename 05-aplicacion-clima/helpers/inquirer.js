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
            value: 1,
            name: `${"1.".green} Buscar lugar`
        },
        {
            value: 2,
            name: `${"2.".green} Historial`
        },
        {
            value: 0,
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

    console.log("");
    const pausaOpt = [
        {
            type: "input",
            name: "pausaOpt",
            message: `Presione ${"ENTER".green} para continuar\n`,
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

const listadoTareasBorrar = async(tareas = []) => {

    //Con el map construimos propiedades en un objeto
    const choices = tareas.map( (tarea, i) => {

        return {
            value: tarea.id,
            name: `${ (i+1+".").green } ${tarea.desc}`
        }
    });

    choices.unshift({
        value: 0,
        name: `${"0.".green} Cancelar`
    })

    const preguntas = [
        {
            type: "list",
            name: "id",
            message: "Borrar",
            loop: false,
            pageSize: 10,
            choices //choices: choices
        }
    ];

    const { id } = await inquirer.prompt(preguntas);

    return id;
}

const confirmar = async(msg) => {

    const pregunta = [
        {
            type: "confirm",
            name: "ok",
            default: false,
            message: msg
        }
    ];

    const { ok } = await inquirer.prompt(pregunta);

    return ok;
}

const tareasChecklist = async(tareas = []) => {

    //Con el map construimos propiedades en un objeto
    const choices = tareas.map( (tarea, i) => {
    
        return {
            value: tarea.id,
            name: `${ (i+1+".").green } ${tarea.desc}`,
            checked: (tarea.completadaEn) ? true : false
        }
    });

    choices.unshift({
        value: 0,
        name: `${"0.".green} Cancelar`
    })

    const preguntas = [
        {
            type: "checkbox",
            name: "ids",
            message: "Seleccione",
            loop: false,
            pageSize: 10,
            choices //choices: choices
        }
    ];

    const { ids } = await inquirer.prompt(preguntas);

    return ids;
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    tareasChecklist
}