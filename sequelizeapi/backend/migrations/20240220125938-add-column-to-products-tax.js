"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Product", "fTax", {
      type: Sequelize.FLOAT,
      defaultValue: 9,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Product", "fTax");
  },
};
