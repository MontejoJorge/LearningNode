const { response } = require("express");
const { generarJWT } = require("../helpers/generar-jwt");
const jwt = require('jsonwebtoken');
const Usuario = require("../models/usuario");

const validarJWT = async (req, res = response, next) => {

    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            msg: "Falta el token en la peticion"
        })
    }

    try {

        const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

        const usuario = await Usuario.findById(uid);

        if( !usuario ) {
            return res.status(401).json({
                msg: 'Token no válido - usuario no existe DB'
            })
        }

        // Verificar si el uid tiene estado true
        if ( !usuario.estado ) {
            return res.status(401).json({
                msg: 'Token no válido - usuario con estado: false'
            })
        }

        req.usuario = usuario;

        next();

    } catch (error) {

        console.log(error);
        res.status(401).json({
            msg: "Token no valido"
        })

    }

    console.log(token);

    next();
}

module.exports = {
    validarJWT
}