// Rutas para los usuarios

const express = require ('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

// API /LUGARES
router.post('/', usuariosController.crearUsuario); // Cargar dato
router.get('/', usuariosController.obtenerUsuario); // Traer dato
router.put('/:id', usuariosController.actualizarUsuario); // Modificar dato con ID
router.get('/:id', usuariosController.obtenerUsuario); // Traer dato con ID
router.delete('/:id', usuariosController.eliminarUsuario); // Eliminar dato con ID
module.exports = router;