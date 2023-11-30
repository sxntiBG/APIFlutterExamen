const express = require('express');
const viajeSchema = require('../models/viajes');

//Constructor
const router = express.Router();

//Crear viaje
router.post('/viajes', (req, res) => {
    const viajes = viajeSchema(req.body);
    viajes
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message : error }));
});

//Obtener todos los viajes
router.get('/viajes', (req, res) => {
    viajeSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message : error }));
});


// Obtener viaje de acuerdo a la ciudad de origen
router.get('/viajes/:ciudadOrigen', (req, res) => {
    const { ciudadOrigen } = req.params;
    viajeSchema
        .findOne({ ciudadOrigen: ciudadOrigen })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


//Actualizar un viaje
router.put('/viajes/:codigo', (req, res) => {
    const { codigo } = req.params;
    const {ciudadOrigen, ciudadDestino, precioPesos, cantidadPasajeros } = req.body;
    viajeSchema
        .updateOne({ _id: codigo }, { $set: {ciudadOrigen, ciudadDestino, precioPesos, cantidadPasajeros} })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message : error }));
});

//Eliminar un viaje
router.delete('/viajes/:codigo', (req, res) => {
    const { codigo } = req.params;
    viajeSchema
        .deleteOne({ _id: codigo })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message : error }));
});

module.exports = router;
