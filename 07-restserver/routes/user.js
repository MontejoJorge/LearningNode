const { Router } = require("express");
const { check } = require("express-validator");

const { validateFields } = require('../middlewares/validate-fields');
const { vaildRole, emailExist, userExistById } = require("../helpers/db-validators");

const { usuariosGet, 
    usuariosPut, 
    usuariosDelete, 
    usuariosPatch, 
    usuariosPost } = require("../controllers/user");

const router = Router();

router.get('/', usuariosGet);

router.put('/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(userExistById),
    check('role').custom(vaildRole),
    validateFields
], usuariosPut);

router.post('/',[
    check('correo').custom(emailExist),
    check('nombre',  'El nombre es obligatorio').not().isEmpty(),
    check('password',  'La contraseña debe tener mas de 6 letras').isLength({min: 6}),
    validateFields
],usuariosPost);

router.patch('/', usuariosPatch);

router.delete('/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(userExistById),
    validateFields
], usuariosDelete);

module.exports = router;