const { Router } = require('express');
const { findAllTransferenciasController, createTransferenciaController } = require('../controllers/transferencia');


const router = Router();

router.get('/transferencias', findAllTransferenciasController);

router.post('/transferencia', createTransferenciaController);

module.exports = router;