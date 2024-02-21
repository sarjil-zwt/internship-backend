"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Order", "fDiscounted", {
      type: Sequelize.FLOAT,
      defaultValue: 0,
    });
    await queryInterface.addColumn("Order", "fTotalTax", {
      type: Sequelize.FLOAT,
      defaultValue: 0,
    });
    await queryInterface.addColumn("Order", "fGrandTotal", {
      type: Sequelize.FLOAT,
      defaultValue: 0,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Order", "fDiscounted");
    await queryInterface.removeColumn("Order", "fTotalTax");
    await queryInterface.removeColumn("Order", "fGrandTotal");
  },
};
