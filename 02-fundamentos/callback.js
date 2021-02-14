setTimeout(() => {
    console.log("Tiempo");
}, 1000);

//El callback se manda como parametro a otra funcion, dicho callback se ejecutara al terminar de llamar a la funcion
const getUsuarioById = (id, despues) => {

    const usuario = {
        id, //id: id,
        nombre: "Jorge"
    }

    setTimeout(() => {
        despues(usuario);
    }, 1000);
}

getUsuarioById(1, (usuario) => {
    console.log(usuario);
})