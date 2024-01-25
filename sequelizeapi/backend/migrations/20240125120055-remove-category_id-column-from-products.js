"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn("products", "category_id");
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn("products", "category_id", {
      type: Sequelize.STRING,
      allowNull: false, // or false, depending on your requirements
    });
  },
};
