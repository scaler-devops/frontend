const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to parse URL-encoded bodies (from form submissions)
app.use(express.urlencoded({ extended: true }));

// Serve the HTML file when a GET request is made to the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle the form submission
app.post('/submit', (req, res) => {
  const userMessage = req.body.message;
  console.log('Received message:', userMessage);

  // Send a simple response back to the user
  res.send(`Thank you for your message: <strong>${userMessage}</strong>`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});