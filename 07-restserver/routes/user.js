const { Router } = require("express");
const { check } = require("express-validator");

const { validateFields } = require('../middlewares/validate-fields');
const { vaildRole } = require("../helpers/db-validators");

const { usuariosGet, 
    usuariosPut, 
    usuariosDelete, 
    usuariosPatch, 
    usuariosPost } = require("../controllers/user");

const router = Router();

router.get('/', usuariosGet);

router.put('/:id', usuariosPut);

router.post('/',[
    check('correo',  'El correo no es valido').isEmail(),
    check('nombre',  'El nombre es obligatorio').not().isEmpty(),
    check('password',  'La contraseña debe tener mas de 6 letras').isLength({min: 6}),
    //check('role',  'El rol no es valido').isIn(["admin", "user"]),
    check('role').custom(vaildRole), 
    validateFields
],usuariosPost);

router.patch('/', usuariosPatch);

router.delete('/', usuariosDelete);

module.exports = router;