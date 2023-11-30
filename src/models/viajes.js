const mongoose = require('mongoose');

const viajeSchema = mongoose.Schema({
    codigo: {
        type: String,
        required:[true,'El campo codigo es obligatorio']
    },
    ciudadOrigen : {
        type: String,
        required:[true,'El campo ciudadOrigen es obligatorio']
    },
    ciudadDestino : {
        type: String,
        required:[true,'El campo ciudadDestino es obligatorio']
    },
    precioPesos : {
        type: String,
        required:[true,'El campo precioPesos es obligatorio']
    },
    cantidadPasajeros : {
        type: String,
        required:[true, 'El campo cantidadPasajeros es obligatorio']
    }
});

module.exports = mongoose.model('viajes', viajeSchema);