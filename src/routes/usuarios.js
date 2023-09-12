const express = require('express');
const usuarioSchema = require('../models/usuarios');

//Constructor
const router = express.Router();

//Crear usuario
router.post('/usuarios', (req, res) => {
    const usuario = usuarioSchema(req.body);
    usuario
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message : error }));
});

//Obtener todos los usuarios
router.get('/usuarios', (req, res) => {
    usuarioSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message : error }));
});

//Obtener un usuario
router.get('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    usuarioSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message : error }));
});

//Actualizar un usuario
router.put('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, correo, contraseña, fecha, rol } = req.body;
    usuarioSchema
        .updateOne({ _id: id }, { $set: {nombre, correo, contraseña, fecha, rol} })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message : error }));
});

//Eliminar un usuario
router.delete('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    usuarioSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message : error }));
});

module.exports = router;
