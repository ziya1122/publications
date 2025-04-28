const express = require('express');
const cors = require('cors');
const sequelize = require('C:/Users/Admin/Desktop/research-paper-repo/backend/config/database');
const User = require('C:/Users/Admin/Desktop/research-paper-repo/backend/model/user');
const Paper = require('C:/Users/Admin/Desktop/research-paper-repo/backend/model/paper');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// API routes
app.use('/api/auth', require('C:/Users/Admin/Desktop/research-paper-repo/backend/routes/auth'));
app.use('/api/papers', require('C:/Users/Admin/Desktop/research-paper-repo/backend/routes/papers'));

// API test route
app.get('/api', (req, res) => {
    res.json({ message: 'API is working. Available endpoints: /api/papers, /api/auth' });
});

// DB test route (optional, for debugging)
app.get('/api/db-test', async (req, res) => {
    try {
      await sequelize.authenticate();
      const [tables] = await sequelize.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'");
      const [papers] = await sequelize.query("SELECT * FROM papers LIMIT 10");
      
      res.json({
        connection: 'Success',
        tables: tables,
        directQuery: papers
      });
    } catch (err) {
      res.status(500).json({
        connection: 'Failed',
        error: err.message
      });
  }
});

// Server start
const PORT = process.env.PORT || 5000;
sequelize.sync().then(() => {
  console.log('Database connected and synced');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
