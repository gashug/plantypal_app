// server/routes/gardenRoutes.js

const express = require('express');
const router = express.Router();
const gardenController = require('../controllers/gardenController');

// POST /api/gardens
router.post('/', gardenController.createGarden);

// GET /api/gardens
router.get('/', gardenController.getAllGardens);

// GET /api/gardens/:id
router.get('/:id', gardenController.getGardenById);

// PUT /api/gardens/:id
router.put('/:id', gardenController.updateGardenById);

// DELETE /api/gardens/:id
router.delete('/:id', gardenController.deleteGardenById);

module.exports = router;
