const Role = require('../models/role');

const vaildRole = async(rol = '') => {
    const existeRol = await Role.findOne({ rol });
    if (!existeRol) {
        throw new Error(`El rol: ${rol} no existe`);
    }
}

module.exports = {
    vaildRole
}