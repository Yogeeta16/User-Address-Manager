const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

const Address = sequelize.define('Address', {
  street: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  zipCode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.hasMany(Address, { as: 'addresses' });
Address.belongsTo(User);

module.exports = Address;
