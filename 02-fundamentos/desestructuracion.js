const deadpool = {
    nombre: "Wade",
    apellido: "Winston",
    poder: "Regeneracion",
    //edad: 50,
    getNombre () {
        return `${ this.nombre } ${ this.apellido } ${ this.poder }`
    }
}
/*--------------Desestructurar en un objeto--------------*/
// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;
const { nombre, apellido, poder, edad=0 } = deadpool;

console.log(deadpool.getNombre());
console.log(nombre, apellido, poder, edad);

/*--------------Desestructurar en una funcion--------------*/
function imprimirDatos({ nombre, apellido, poder, edad=0 }) {
    console.log(nombre, apellido, poder, edad); 
}

imprimirDatos( deadpool );

/*--------------Desestructurar en un array--------------*/
const heroes = ["Deadpool", "Daredevil", "Spiderman"];

// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];
const [h1, h2, h3] = heroes;
//const [, , h3] = heroes3; //Spiderman

console.log(h1, h2, h3);