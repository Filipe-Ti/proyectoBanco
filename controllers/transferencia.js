const { findAllTransferencias, createTransferencia } = require('../service/transferencia');

const findAllTransferenciasController = async (req, res) => {
    const respuesta = await findAllTransferencias();
    res.json(respuesta.datos.map(transferencia => [transferencia.fecha, transferencia.emisor_alias.nombre, transferencia.receptor_alias.nombre, transferencia.monto]));
}

const createTransferenciaController = async (req, res) => {
    const emisor = req.body.emisor;
    const receptor = req.body.receptor;
    const monto = parseFloat(req.body.monto);
    await createTransferencia(emisor, receptor, monto);
    res.json('Post transferencia');
}

module.exports = {
    findAllTransferenciasController,
    createTransferenciaController
}