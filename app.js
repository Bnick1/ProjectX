const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.status(200).json({ 
    message: 'SianAgriTech API is running!',
    version: '1.0',
    services: ['farmer-registration', 'sensor-data', 'weather-alerts']
  });
});

// Farmer registration endpoint
app.post('/api/farmers/register', (req, res) => {
  const { name, district, phone, farmSize } = req.body;
  
  if (!name || !district || !phone) {
    return res.status(400).json({ error: 'Name, district, and phone are required' });
  }

  const newFarmer = {
    id: Date.now().toString(),
    name,
    district,
    phone,
    farmSize: farmSize || 'Not specified',
    registeredAt: new Date().toISOString(),
    status: 'active'
  };

  res.status(201).json({
    message: 'Farmer registered successfully',
    farmer: newFarmer
  });
});

// Get Uganda districts
app.get('/api/uganda/districts', (req, res) => {
  const districts = [
    'Kampala', 'Wakiso', 'Masaka', 'Gulu', 'Lira', 'Mbale',
    'Jinja', 'Mbarara', 'Fort Portal', 'Arua', 'Soroti', 'Entebbe'
  ];
  res.json(districts);
});

// Sensor data endpoint
app.get('/api/sensor-data', (req, res) => {
  const sensorData = {
    temperature: 24.5,
    humidity: 60,
    soilMoisture: 35,
    timestamp: new Date().toISOString()
  };
  res.json(sensorData);
});

// Weather alerts endpoint
app.get('/api/weather/alerts', (req, res) => {
  const alerts = [
    { type: 'rain', message: 'Heavy rainfall expected tomorrow', severity: 'medium' },
    { type: 'irrigation', message: 'Soil moisture low - irrigation recommended', severity: 'high' }
  ];
  res.json(alerts);
});

app.listen(port, () => {
  console.log(`SianAgriTech API running on port ${port}`);
});

module.exports = app;
