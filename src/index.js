const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/usuarios');
const rolRoutes = require('./routes/roles');

const app = express();

//Puerto
const port = process.env.PORT || 3000;

//Middleware
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', rolRoutes);

//Rutas
app.get('/', (req, res) =>{
    res.send('Bienvenido a mi API');
})

//Conexión mongodb
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Conexión a MongoDB'))
    .catch((error) => console.error(error));


    
app.listen(port, () =>{
    console.log(`Servidor corriendo en el puerto ${port}`);
});