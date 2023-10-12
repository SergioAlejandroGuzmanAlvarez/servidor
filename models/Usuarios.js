const mongoose = require('mongoose');
const UsuarioSSchema = new mongoose.Schema({
    nombre: {type: String},
    contraseña: {type: String},
    tipoUsuario: {type: String},
    pais:{type: String},
    email: {type: String},
    acercade:{type: String},
    fechaCreacion:{type: Date, default: Date.now()}
});
module.exports = mongoose.model('Usuarios', UsuarioSSchema);