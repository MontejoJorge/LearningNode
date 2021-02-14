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

const getEmpleado = (id, callback) => {
    const empleado = empleados.find(e => e.id === id);

    if (empleado) {
        //como el empleado se ha econtrado el parametro err lo definimos a null
        callback(null, empleado);
    } else {
        callback(`Empleado con id ${id} no existe`);
    }
}

// console.log(getEmpleado(5));

getEmpleado(10, (err, empleado) => {

    if (err) {
        console.log("Error!");
        return console.log(err);
    }

    console.log("Empleado Existe");
    console.log(empleado);

})