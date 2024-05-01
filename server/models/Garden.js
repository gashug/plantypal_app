// server/controllers/gardenController.js

const Garden = require('../models/Garden');

// Controller functions
const createGarden = async (req, res) => {
  try {
    const { name, size, location, sunlight, user } = req.body;
    const newGarden = new Garden({ name, size, location, sunlight, user });
    await newGarden.save();
    res.status(201).json(newGarden);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create garden', error: error.message });
  }
};

module.exports = {
  createGarden
};
