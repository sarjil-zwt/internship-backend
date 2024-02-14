"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("User", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      vName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      vEmail: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true, // Add this line if email should be unique
      },
      vPassword: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      vImage: {
        type: Sequelize.STRING,
      },
      eRole: {
        type: Sequelize.ENUM("admin", "manager", "user"),
        allowNull: false,
        defaultValue: "admin",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("User");
  },
};
