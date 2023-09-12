const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema({
    nombre : {
        type: String,
        required:[true,'El campo Nombre es obligatorio']
    },
    correo : {
        type: String,
        required:[true,'El campo Correo es obligatorio']
    },
    contraseña : {
        type: String,
        required:[true,'El campo Contraseña es obligatorio']
    },
    fecha : {
        type: Date,
        required:[true, 'El campo Fecha de creación es obligatorio']
    },
    rol : {
        type: String,
        required:[true, 'El campo Rol es obligatorio']
    }
});

module.exports = mongoose.model('usuario', usuarioSchema);