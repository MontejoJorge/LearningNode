const { createPromptModule } = require("inquirer");
const Tarea = require("./Tarea");

class Tareas {
    _lista = {};

    get listaTareas() {
        const listado = [];

        //El metodo keys me devuelve un array con las keys de un objeto
        Object.keys(this._lista).forEach( key => listado.push(this._lista[key]) )

        return listado;
    }

    constructor() {
        this._lista = {}
    }

    borrarTarea(id) {
        if (this._lista[id]){
            delete this._lista[id];
        }
    }

    crearTarea(desc){
        const tarea = new Tarea(desc);

        this._lista[tarea.id] = tarea;
    }

    cargarTareas(tareasFile) {
        tareasFile.forEach(tarea => this._lista[tarea.id]=tarea );
    }

    listarTareas() {

        console.log("");
        this.listaTareas.forEach((tarea, index) => {

            const estado = (tarea.completadaEn==null)
                                    ? "Pendiente".red
                                    : "Completada".green

            console.log(`${index+1 + "."}`.green + `${tarea.desc} :: ${estado}`);
        });
    }

    listarPendientesCompletadas(completadas = true) {

        console.log("");
        let index = 0;
        
        this.listaTareas.forEach((tarea) => {

            if (completadas){
                //Mostrar tareas completadas
                if (tarea.completadaEn) {
                    index+=1;
                    console.log(`${(index + ".").green } ${tarea.desc} :: ${(tarea.completadaEn).toString().green}`);
                }

            } else {
                //Mostrar tareas pendientes
                if (!tarea.completadaEn) {
                    index+=1;
                    console.log(`${(index + ".").green } ${tarea.desc} :: ${"Pendiente".red}`);
                }
            }
        });
    }
}

module.exports = Tareas;