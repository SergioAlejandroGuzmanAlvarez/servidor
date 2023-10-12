// Rutas para los lugares

const express = require ('express');
const router = express.Router();
const experienciaController = require('../controllers/experienciaController');

// API /LUGARES
router.post('/', experienciaController.crearExperiencia); // Cargar dato
router.get('/', experienciaController.obtenerExperiencia); // Traer dato
module.exports = router;