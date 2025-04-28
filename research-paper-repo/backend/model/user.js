const { DataTypes } = require('sequelize');
const sequelize = require('C:/Users/Admin/Desktop/research-paper-repo/backend/config/database');
  const User = sequelize.define('users', {
    name: { type: DataTypes.STRING, allowNull: false }, //  Add this line
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.ENUM('faculty', 'student'), allowNull: false }
  });
module.exports = User;
