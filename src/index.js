const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', require('./routes/weatherRoutes'));

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});