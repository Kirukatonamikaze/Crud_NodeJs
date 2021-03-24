const express = require('express');
const router = express.Router();
const rutas = require('../controllers/ctrCliente');

router.get('/',rutas.list);
router.post('/add',rutas.save);
router.get('/delete/:id',rutas.delete);
router.get('/update/:id',rutas.edit);
router.post('/update/:id',rutas.update);

module.exports = router;