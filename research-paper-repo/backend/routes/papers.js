const express = require('express');
const router = express.Router();
const Paper = require('C:/Users/Admin/Desktop/research-paper-repo/backend/model/paper');

// Add a new paper (faculty only)
router.post('/', async (req, res) => {
  try {
    const paper = await Paper.create(req.body);
    res.json(paper);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all papers (only one GET method, clean)
router.get('/', async (req, res) => {
  try {
    const papers = await Paper.findAll({
      raw: true, // Get plain JSON instead of Sequelize objects
      logging: console.log // Optional: See SQL queries in terminal
    });
    console.log('Papers from database:', papers);
    res.json(papers);
  } catch (err) {
    console.error('Error retrieving papers:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
