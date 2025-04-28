// In config/database.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
  host: process.env.DATABASE_HOST,
  dialect: 'postgres', // Use postgres for Neon DB
  port: process.env.DATABASE_PORT || 5432, // Default PostgreSQL port
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  logging: console.log // Enable logging to see SQL queries
});

module.exports = sequelize;
