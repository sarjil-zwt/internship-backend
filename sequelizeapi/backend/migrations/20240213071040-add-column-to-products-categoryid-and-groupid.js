"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Product", "iCategoryId", {
      type: Sequelize.INTEGER,
      defaultValue: 1,
      references: {
        model: "Category",
        key: "id",
      },
      onDelete: "cascade",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Product", "iCategoryId");
  },
};
