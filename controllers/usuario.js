const { findAllUsuarios, createUsuario, updateUsuario, deleteUsuario } = require('../service/usuario');

const findAllUsuarioController = async (req, res) => {
    const respuesta = await findAllUsuarios();
    res.json(respuesta.datos);
}

const createUsuarioController = async (req, res) => {
    const nombre = req.body.nombre;
    const balance = req.body.balance;
    await createUsuario(nombre, balance);
    res.json('Post usuario');
}

const updateUsuarioController = async (req, res) => {
    const id = req.query.id;
    const nombre = req.body.name;
    const balance = req.body.balance;
    await updateUsuario(id, nombre, balance);
    res.json('Put usuario');
}

const deleteUsuarioController = async (req, res) => {
    const id = req.query.id;
    await deleteUsuario(id);
    res.json('Delete usuario');
}

module.exports = {
    findAllUsuarioController,
    createUsuarioController,
    updateUsuarioController,
    deleteUsuarioController
}