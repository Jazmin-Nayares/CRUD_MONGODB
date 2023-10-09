const express = require('express');
const router = express.Router();

const reporteController = require('../controllers/ReporteController');

//Mostrar todos los reportes 
router.get('/', (req, res) => {
  reporteController.mostrar(req, res);
});
//Crear Reporte
router.post('/crear', reporteController.crear)

//Editar Reporte
router.post('/editar/:id', reporteController.editar)

//Eliminar reporte
router.get('/borrar/:id', reporteController.borrar)
module.exports = router;

