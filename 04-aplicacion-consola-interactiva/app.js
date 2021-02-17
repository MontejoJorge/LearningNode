const { guardarTareas, leerTareas } = require("./helpers/storage");
const { 
    inquirerMenu, 
    pausa, 
    leerInput 
} = require("./helpers/inquirer");

const Tarea = require("./models/Tarea");
const Tareas = require("./models/Tareas");

require("colors")

console.clear();


const main = async() => {
    
    let opt = "";

    const tareas = new Tareas();

    const tareasFile = leerTareas();

    if (tareasFile) {
        tareas.cargarTareas(tareasFile);
    }
    
    do {
        //await obliga  a esperar una respuesta de la funcion mostrarMenu()
        opt = await inquirerMenu();

        switch (opt) {
            case "1":
                const desc = await leerInput("Descripcion de la tarea: ");
                tareas.crearTarea(desc);
            break;
            case "2":
                tareas.listarTareas();
            break;
            case "3":
                tareas.listarPendientesCompletadas(true);
            break;
            case "4":
                tareas.listarPendientesCompletadas(false);
            break;
        }
        

        guardarTareas(tareas.listaTareas);

        if (opt!=="0") await pausa();
        
    } while (opt !== "0");
    
}

main();