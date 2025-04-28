const { DataTypes } = require('sequelize');
const sequelize = require('C:/Users/Admin/Desktop/research-paper-repo/backend/config/database');

const Paper = sequelize.define('papers', {
  id: {
    type: DataTypes.INTEGER, // Use INTEGER for serial auto-increment
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.TEXT, // Use TEXT for longer text fields
    allowNull: false
  },
  authors: {
    type: DataTypes.TEXT, // Use TEXT for authors' list
    allowNull: false
  },
  department: {
    type: DataTypes.STRING(100), // Use STRING(100) for VARCHAR with length
    allowNull: false
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  citations: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  links:{
    type: DataTypes.TEXT,
    allowNull:true
  }
}, {
  tableName: 'papers', // Explicitly specify the table name
  timestamps: false // If your table doesn't have created_at/updated_at columns
});

module.exports = Paper;