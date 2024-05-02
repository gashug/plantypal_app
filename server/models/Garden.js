// server/models/Garden.js

const mongoose = require('mongoose');

const gardenSchema = new mongoose.Schema({
  name: { type: String, required: true },
  size: { type: String, enum: ['small', 'medium', 'large'], required: true },
  location: { type: String, required: true },
  sunlight: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  plants: [
    {
      vegetable: { type: mongoose.Schema.Types.ObjectId, ref: 'Vegetable' },
      quantity: { type: Number, default: 1 },
      sowDate: { type: Date },
      transplantDate: { type: Date },
      harvestDate: { type: Date }
    }
  ]
});

module.exports = mongoose.model('Garden', gardenSchema);
