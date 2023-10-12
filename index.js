const express = require('express');
const conectarDB = require('./config/db.js');
const cors = require("cors");
//Creamos el servidor
const app = express();
//Conectamos a la base datos
conectarDB();
app.use(cors())
app.use(express.json());
//Crear las rutas para la base datos
app.use('/api/lugares', require('./routes/lugares'));
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/experiencias', require('./routes/experiencias'));
const User = require('./models/Usuarios');
// Definimos ruta principal
app.get('/', (req,res) =>{
    res.send('Travel Picarri');
})
app.put('/api/lugares/:id', (req, res) => {
    console.log('req.params.id', req.params.id);
});
app.put('/api/usuarios/:id', (req, res) => {
    console.log('req.params.id', req.params.id);
});
app.listen(4000, ()=> {
    console.log('El servidor está corriendo')
})