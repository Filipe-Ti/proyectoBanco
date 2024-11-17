const { Router } = require('express');
const { findAllUsuarioController, createUsuarioController, updateUsuarioController, deleteUsuarioController } = require('../controllers/usuario');

const router = Router();

router.get('/usuarios', findAllUsuarioController);

router.post('/usuario', createUsuarioController);

router.put('/usuario', updateUsuarioController);

router.delete('/usuario', deleteUsuarioController);

module.exports = router;