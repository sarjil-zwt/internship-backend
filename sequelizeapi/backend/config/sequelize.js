const { Sequelize } = require("sequelize");

// Replace 'your_database_name', 'your_username', and 'your_password' with your actual database credentials
const sequelize = new Sequelize("sequelizeapi", "root", "", {
  host: "localhost",
  dialect: "mysql", // Change this if you're using a different database
  logging: false,
});

module.exports = sequelize;
