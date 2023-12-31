const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const viajesRoutes = require('./routes/viajes');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

/*
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://modulosindividuales.onrender.com');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
*/

//Puerto
const port = process.env.PORT || 3000;

//Middleware
app.use(express.json());
app.use('/api', viajesRoutes);


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