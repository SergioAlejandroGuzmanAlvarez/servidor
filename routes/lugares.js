// Rutas para los lugares

const express = require ('express');
const router = express.Router();
const lugarController = require('../controllers/lugaresController');

// API /LUGARES
router.post('/', lugarController.crearLugar); // Cargar dato
router.get('/', lugarController.obtenerLugares); // Traer dato
router.put('/:id', lugarController.actualizarLugares); // Modificar dato con ID
router.get('/:id', lugarController.obtenerLugares); // Traer dato con ID
router.delete('/:id', lugarController.eliminarLugar); // Eliminar dato con ID
module.exports = router;