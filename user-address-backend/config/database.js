const { Sequelize } = require("sequelize");

// database config 
const sequelize = new Sequelize("userAddressDB", "root", "manager", {
  host: "localhost",
  dialect: "mysql", 
});

module.exports = sequelize;
