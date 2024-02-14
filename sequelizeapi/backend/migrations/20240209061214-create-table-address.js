"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Address", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      vFirstname: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      vLastname: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      vPhone: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      vPincode: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      vState: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      vCity: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      vHouse: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      vArea: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      eAddressType: {
        type: Sequelize.ENUM("Home", "Work"),
        defaultValue: "Home",
        allowNull: false, // Addressing the eAddressType allowNull issue
      },
      iUserId: {
        type: Sequelize.INTEGER,
        allowNull: false, // Addressing the iUserId allowNull issue
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
    await queryInterface.dropTable("Address");
  },
};
