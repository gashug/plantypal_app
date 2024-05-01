// server/routes/vegetableRoutes.js

const express = require('express');
const router = express.Router();
const vegetableController = require('../controllers/vegetableController');

// POST /api/vegetables
router.post('/', vegetableController.createVegetable);

// GET /api/vegetables
router.get('/', vegetableController.getAllVegetables);

// GET /api/vegetables/:id
router.get('/:id', vegetableController.getVegetableById);

// PUT /api/vegetables/:id
router.put('/:id', vegetableController.updateVegetableById);

// DELETE /api/vegetables/:id
router.delete('/:id', vegetableController.deleteVegetableById);

module.exports = router;
