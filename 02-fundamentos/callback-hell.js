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


const getSalario = (id, callback) => {
    //al usar ? significa que si la funcion find no devuelve un null/undefined 
    //entonces obtendra la propiedad salario
    const salario = salarios.find(s => s.id === id)?.salario;
    
    if (salario){
        callback(null, salario)
    } else {
        callback(`El salario para el empleado ${id} no existe`)
    }
}


// console.log(getEmpleado(5));
const id = 10;

getEmpleado(id, (err, empleado) => {

    if (err) {
        console.log("Error!");
        return console.log(err);
    } else {
        console.log("Empleado Existe");
        console.log(empleado.nombre);
    }
})

getSalario(id, (err, salario) => {
    if (err) {
        console.log("Error!");
        return console.log(err);
    } else {
        console.log(salario);
    }

})