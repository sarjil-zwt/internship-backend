const sequelize = require("./sequelize");

const connectDatabase = async () => {
  sequelize
    .sync({ alter: true })
    .then(() => {
      console.log("Database synced");
    })
    .catch((err) => {
      console.error("Error syncing database:", err);
    });
};

module.exports = connectDatabase;
