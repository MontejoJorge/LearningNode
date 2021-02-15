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

        (empleado)
            ? resolve(empleado)
            : reject(`Empleado con id ${id} no existe`)

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

const id = 3;

//async devuelve una promesa
const getInfoUsuario = async( id ) => {

    try {
        //await solo es valido dentro de una funcion async
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return `El salario del empleado ${empleado} es: ${salario}`;
    } catch (error) {
        return error;
    }
}

getInfoUsuario(id)
    .then(msg => console.log(msg))
    .catch(err => console.log(err))