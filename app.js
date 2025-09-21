// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// Middleware to parse JSON
app.use(express.json());

// ✅ FIX: Root route must return a 200 status for health checks
app.get('/', (req, res) => {
  res.status(200).send('Smart Farm API is running!');
});

// ✅ Your sensor data API endpoint
app.get('/api/sensor-data', (req, res) => {
  const sensorData = {
    temperature: 24.5,
    humidity: 60,
    soilMoisture: 35,
    timestamp: new Date().toISOString()
  };
  res.status(200).json(sensorData);
});

// ✅ Start the server
app.listen(port, () => {
  console.log(`Smart Farm server running on port ${port}`);
});

// ✅ Export the app for potential testing (critical for some environments)
module.exports = app;
