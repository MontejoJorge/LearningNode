const Role = require('../models/role');
const usuario = require('../models/usuario');

const vaildRole = async(rol = '') => {
    const existeRol = await Role.findOne({ rol });
    if (!existeRol) {
        throw new Error(`El rol: ${rol} no existe`);
    }
}

const emailExist = async(correo = '') => {
    const usedEmail =  await usuario.findOne({ correo });
    if (usedEmail) {
        throw new Error(`El email ${correo} ya esta en uso`);
    }
}

const userExistById = async(id) => {
    const userExist =  await usuario.findById(id);
    if (!userExist) {
        throw new Error(`El usuario con id: ${id} no existe`);
    }
}


module.exports = {
    vaildRole,
    emailExist,
    userExistById
}