const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 5000;

// Create a connection to the database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'phmx4ky817inn',
  database: 'atonixforgedb'
});

// Connect to the database
db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

// Middleware to parse JSON bodies
app.use(express.json());

// Define a simple route to fetch data
app.get('/api/data', (req, res) => {
  db.query('SELECT * FROM atonixcorp_admin', (err, results) => {
    if (err) {
      res.status(500).send('Error fetching data');
      return;
    }
    res.json(results);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});