const mongoose = require('mongoose');
const ExperienciasSchema = new mongoose.Schema({
    nombre:{type: String},
    apellido:{type: String},
    descripcion:{type: String},
    calificacion:{type: String},
    opinion: {type: String},
    fechaCreacion:{type: Date, default: Date.now()}
});
module.exports = mongoose.model('Experiencias', ExperienciasSchema);