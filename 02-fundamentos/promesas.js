const empleados = [
    {
        id: 1,
        nombre: "Juan"
    },
    {
        id: 2,
        nombre: "Pedro"
    },
    {
        id: 3,
        nombre: "Paco"
    }
];
const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];

const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        
        const empleado = empleados.find(e => e.id === id)?.nombre;

        if (empleado) {
            resolve(empleado);
        } else {
            reject(`Empleado con id ${id} no existe`);
        }

        //if simplificado (operador ternario)
        // (empleado)
        //     ? resolve(empleado)
        //     : reject(`Empleado con id ${id} no existe`)

    });
}

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        
        const salario = salarios.find(s => s.id === id)?.salario;

        (salario)
            ? resolve(salario)
            : reject(`El salario para el empleado ${id} no existe`)

    });
}

const id = 4;

/*getEmpleado(id)
    .then((empleado) => {
        console.log(empleado);
    }).catch((err) => {
        console.log(err);
    });

//Recordatorio: si una funcion solo tiene una linea se puede simplificar
getSalario(id)
    .then(salario => console.log(salario))
    .catch(err => console.log(err));
*/

let nombre;

getEmpleado(id)
    .then(empleado => {
        nombre = empleado;
        return getSalario(id)
    })// el primer then llama a otra promesa por lo que puedo llamar a otro then
    .then(salario => console.log("El empleado con el nombre", nombre, "tiene un salario de:", salario))
    //este catch sirve para cualquiera de las dos promesas/then
    .catch(err => console.log(err));
