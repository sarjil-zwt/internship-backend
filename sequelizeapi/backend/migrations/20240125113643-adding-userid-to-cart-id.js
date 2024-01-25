"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("carts", "UserId", {
      type: Sequelize.STRING,
      allowNull: false, // or false, depending on your requirements
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("carts", "UserId");
  },
};
