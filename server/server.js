// server/server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json()); // Parse JSON bodies

// Connect to MongoDB
mongoose.connect('mongodb://localhost/plantypal', {
})
.then(() => {
  console.log('MongoDB connected');
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Routes
//const authRoutes = require('./routes/authRoutes');
const gardenRoutes = require('./routes/gardenRoutes');
const vegetableRoutes = require('./routes/vegetableRoutes'); // Import vegetableRoutes

//app.use('/api/auth', authRoutes);
app.use('/api/gardens', gardenRoutes);
app.use('/api/vegetables', vegetableRoutes); // Mount vegetableRoutes at /api/vegetables

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
