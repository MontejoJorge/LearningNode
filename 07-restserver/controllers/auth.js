const { response } = require("express");
const bcryptjs = require("bcryptjs");
const Usuario = require("../models/usuario");
const { generarJWT } = require("../helpers/generar-jwt");
const { googleVerify } = require("../helpers/google-verify");


const login = async (req, res = response) => {

    const { correo, password } = req.body;

    try {

        // Verificar si el usuario existe
        const usuario = await Usuario.findOne({ correo });

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
        const token = await generarJWT(usuario.id);


        res.json({
            usuario,
            token
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            msg: "Hable con el admninistrador"
        });

    }

}

const googleSignin = async (req, res = response) => {

    const { id_token } = req.body;

    try {

        const { correo, nombre, img } = await googleVerify(id_token);

        let usuario = await Usuario.findOne({ correo });

        if ( !usuario ) {
            //crearlo
            const data = {
                nombre,
                correo,
                password: ":P",
                img,
                google: true
            };

            usuario = new Usuario(data);
            await usuario.save();
        }

        if ( !usuario.estado ) {
            return res.status(401).json({
                msg: "Hable con el administrador, usuario bloqueado"
            })
        }

        const token = await generarJWT(usuario.id);

        res.json({
            usuario,
            token
        });

    } catch (error) {
        console.log(error);

        res.status(400).json({
            msg: "Token de google no es valido"
        });

    }

}

module.exports = {
    login,
    googleSignin
}