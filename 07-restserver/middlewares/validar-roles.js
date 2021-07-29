const { response } = require("express")

const isAdmin = (req, res = response, next) => {

    if (!res.usuario) {
        return res.status(500).json({
            msg: "Se quiere verificar el rol sin validar el token"
        });
    }

    const { role, nombre } = req.usuario;

    if (role !== "admin") {
        return res.status(401).json({
            msg: `${ nombre } no es administrador`
        });
    }

    next();

}

module.exports = {
    isAdmin
}