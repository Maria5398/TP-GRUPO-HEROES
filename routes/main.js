const express = ('express');
const router = express.Router();
const mainControlador = require('../controllers/mainController')

router.get('/', mainControlador.index);
router.get('*', mainControlador.error)

module.exports = router 
