const mongoose = require('mongoose');

const rolesSchema = mongoose.Schema({
    id: {
        type : String,
        required:[true,'El campo id es obligatorio']

    },
    nombre : {
        type: String,
        required:[true,'El campo Nombre es obligatorio']
    },
    productos : {
        type: Boolean,
        required:[true,'El campo Correo es obligatorio']
    },
    ventas : {
        type: Boolean,
        required:[true,'El campo Contraseña es obligatorio']
    },
    compras : {
        type: Boolean,
        required:[true, 'El campo Fecha de creación es obligatorio']
    },
    proveedores : {
        type: Boolean,
        required:[true, 'El campo Rol es obligatorio']
    }
});

module.exports = mongoose.model('roles', rolesSchema);