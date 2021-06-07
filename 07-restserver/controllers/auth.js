const { response } = require("express");
const bcryptjs = require("bcryptjs");
const Usuario = require("../models/usuario");


const login = async(req, res = response) => {

    const { correo, password } = req.body;

    try {

        // Verificar si el usuario existe
        const usuario = await Usuario.findOne( {correo} );

        if (!usuario) {
            return res.status(400).json({
                msg: "El correo y/o contraseña no son validos - correo"
            });
        }

        //Verificar si el usuario esta activo
        if (!usuario.estado) {
            return res.status(400).json({
                msg: "El correo y/o contraseña no son validos - estado:false"
            });
        }

        //Verificar contraseña
        const validPassword = bcryptjs.compareSync(password, usuario.password);
        if (!validPassword) {
            return res.status(400).json({
                msg: "El correo y/o contraseña no son validos - password"
            });
        }

        ///Generar JWT




        res.json({
            msg: "login ok"
        });
    
    } catch (error) {

        console.log(error);

        return res.status(500).json({
            msg: "Hable con el admninistrador"
        });

    }



}

module.exports = {
    login
}