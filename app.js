// app.js
// This is a basic Express server for Cloud Run
const express = require('express');
const app = express();

// Define a simple route for the home page
app.get('/', (req, res) => {
  res.send('Hello from Smart Farm API!');
});

// ✅ CORRECT: Get the PORT from the environment variable for Cloud Run
const port = process.env.PORT || 8080;

// Start the server
app.listen(port, () => {
  console.log(`Smart Farm server running on port ${port}`);
});
