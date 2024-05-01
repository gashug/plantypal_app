// server/controllers/vegetableController.js

const Vegetable = require('../models/Vegetable');

// Controller functions

// Create a new vegetable
const createVegetable = async (req, res) => {
  try {
    const { name, sunRequirements, plantingTips, companionPlants } = req.body;
    const newVegetable = new Vegetable({ name, sunRequirements, plantingTips, companionPlants });
    await newVegetable.save();
    res.status(201).json(newVegetable);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create vegetable', error: error.message });
  }
};

// Get all vegetables
const getAllVegetables = async (req, res) => {
  try {
    const vegetables = await Vegetable.find();
    res.status(200).json(vegetables);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get vegetables', error: error.message });
  }
};

// Get details of a specific vegetable
const getVegetableById = async (req, res) => {
  try {
    const { id } = req.params;
    const vegetable = await Vegetable.findById(id);
    if (!vegetable) {
      return res.status(404).json({ message: 'Vegetable not found' });
    }
    res.status(200).json(vegetable);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get vegetable', error: error.message });
  }
};

// Update an existing vegetable
const updateVegetableById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedVegetable = await Vegetable.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedVegetable) {
      return res.status(404).json({ message: 'Vegetable not found' });
    }
    res.status(200).json(updatedVegetable);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update vegetable', error: error.message });
  }
};

// Delete a vegetable
const deleteVegetableById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedVegetable = await Vegetable.findByIdAndDelete(id);
    if (!deletedVegetable) {
      return res.status(404).json({ message: 'Vegetable not found' });
    }
    res.status(200).json({ message: 'Vegetable deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete vegetable', error: error.message });
  }
};

module.exports = {
  createVegetable,
  getAllVegetables,
  getVegetableById,
  updateVegetableById,
  deleteVegetableById
};
