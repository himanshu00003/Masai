// index.js
const express = require('express');
const app = express();
const PORT = 3000;

// Route: /home
app.get('/home', (req, res) => {
  res.json({ message: 'This is home page' });
});

// Route: /contactus
app.get('/contactus', (req, res) => {
  res.json({ message: 'Contact us at contact@contact.com' });
});

// Bonus Route: /about
app.get('/about', (req, res) => {
  res.json({ message: 'Welcome to the About page!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
