const { Sequelize, DataTypes } = require('sequelize');

const path = require('path');
const sequelize = require(path.resolve(__dirname, '../../config/config'));





const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
