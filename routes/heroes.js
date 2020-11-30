const express = ('express');
const router = express.Router();
const heroesController = require('../controllers/heroesController');

router.get('/', heroesController.index);

router.get('/:id',heroesController.id);
router.get('/:id/')