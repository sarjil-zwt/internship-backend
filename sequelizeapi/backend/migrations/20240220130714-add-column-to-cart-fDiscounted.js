"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Cart", "fDiscounted", {
      type: Sequelize.FLOAT,
      defaultValue: 0,
    });
    await queryInterface.addColumn("Cart", "fTotalTax", {
      type: Sequelize.FLOAT,
      defaultValue: 0,
    });
    await queryInterface.addColumn("Cart", "fGrandTotal", {
      type: Sequelize.FLOAT,
      defaultValue: 0,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Cart", "fDiscounted");
    await queryInterface.removeColumn("Cart", "fTotalTax");
    await queryInterface.removeColumn("Cart", "fGrandTotal");
  },
};
