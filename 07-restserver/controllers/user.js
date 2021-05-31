const { response } = require("express");
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');

const usuariosGet = (req, res = response) => {

    const params = req.query;

    res.json({
        msg: "get API - controlador",
        params
    });
}

const usuariosPost = async(req, res = response) => {

    const { nombre, correo, password, role } = req.body;

    const usuario = new Usuario({ nombre, correo, password, role });

    //Verificar si el correo existe
    const emailExist = await Usuario.findOne({correo});
    if (emailExist) {
        return res.status(400).json({
            msg: "El correo ya existe"
        });
    }


    //Encriptar la contraseña
    const salt = bcryptjs.genSaltSync(10);
    usuario.password = bcryptjs.hashSync( password, salt);

    //Guardar BD

    await usuario.save();

    res.json({
        msg: "post API - controlador",
        usuario
    });
}

const usuariosPut = (req, res = response) => {

    const id = req.params.id;

    res.json({
        msg: "put API - controlador",
        id
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: "patch API - controlador"
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: "delete API - controlador"
    });
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}