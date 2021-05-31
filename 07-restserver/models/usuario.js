const { Schema, model } = require("mongoose");

const UsuarioSchema = Schema({
    nombre : {
        type: String,
        required: [true, "El nombre es obligatorio"]
    },
    correo : {
        type: String,
        required: [true, "El correo es obligatorio"],
        unique: true
    },
    password : {
        type: String,
        required: [true, "La contraseña es obligatorio"],
    },
    img : {
        type: String
    },
    role : {
        type: String,
        required: [true, "El rol es obligatorio"],
        //enum: ["admin", "user",]
    },
    estado : {
        type: Boolean,
        default: true
    },
    google : {
        type: Boolean,
        default: false
    },

});

module.exports = model( "Usuario", UsuarioSchema );