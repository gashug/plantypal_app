// server/models/Vegetable.js

const mongoose = require('mongoose');

const vegetableSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sunRequirements: { type: String, required: true },
  plantingTips: { type: String },
  companionPlants: [{ type: String }]
});

module.exports = mongoose.model('Vegetable', vegetableSchema);
