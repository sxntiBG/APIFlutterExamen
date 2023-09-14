const express = require('express');
const rolesSchema = require('../models/roles');

//Constructor
const router = express.Router();

//Crear rol
router.post('/roles', (req, res) => {
    const roles = rolesSchema(req.body);
    roles
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message : error }));
});

//Obtener todos los roles
router.get('/roles', (req, res) => {
    rolesSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message : error }));
});

//Obtener un rol
router.get('/roles/:id', (req, res) => {
    const { id } = req.params;
    rolesSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message : error }));
});

//Actualizar un rol
router.put('/roles/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, productos, ventas, compras, proveedores } = req.body;
    rolesSchema
        .updateOne({ _id: id }, { $set: {nombre, productos, ventas, compras, proveedores} })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message : error }));
});

//Eliminar un rol
router.delete('/roles/:id', (req, res) => {
    const { id } = req.params;
    rolesSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message : error }));
});

module.exports = router;
