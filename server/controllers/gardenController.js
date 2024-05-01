// server/controllers/gardenController.js

const Garden = require('../models/Garden');

// Controller functions

// Create a new garden
const createGarden = async (req, res) => {
  try {
    const { name, size, location, sunlight } = req.body;
    const newGarden = new Garden({ name, size, location, sunlight });
    await newGarden.save();
    res.status(201).json(newGarden);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create garden', error: error.message });
  }
};

// Get all gardens
const getAllGardens = async (req, res) => {
  try {
    const gardens = await Garden.find();
    res.status(200).json(gardens);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get gardens', error: error.message });
  }
};

// Get details of a specific garden
const getGardenById = async (req, res) => {
  try {
    const { id } = req.params;
    const garden = await Garden.findById(id);
    if (!garden) {
      return res.status(404).json({ message: 'Garden not found' });
    }
    res.status(200).json(garden);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get garden', error: error.message });
  }
};

// Update an existing garden
const updateGardenById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedGarden = await Garden.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedGarden) {
      return res.status(404).json({ message: 'Garden not found' });
    }
    res.status(200).json(updatedGarden);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update garden', error: error.message });
  }
};

// Delete a garden
const deleteGardenById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedGarden = await Garden.findByIdAndDelete(id);
    if (!deletedGarden) {
      return res.status(404).json({ message: 'Garden not found' });
    }
    res.status(200).json({ message: 'Garden deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete garden', error: error.message });
  }
};

module.exports = {
  createGarden,
  getAllGardens,
  getGardenById,
  updateGardenById,
  deleteGardenById
};
