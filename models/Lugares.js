const mongoose = require('mongoose');
const LugarSchema = new mongoose.Schema({
    nombre: {type: String},
    direccion: {type: String},
    estado: {type: String},
    tipo: {type: String},
    referencias: {type: String},
    telefono: {type: String},
    fechaCreacion:{type: Date, default: Date.now()}
});
module.exports = mongoose.model('Lugares', LugarSchema);