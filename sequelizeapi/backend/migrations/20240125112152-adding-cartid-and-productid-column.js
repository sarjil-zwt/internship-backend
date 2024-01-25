"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("cartitems", "CartId", {
      type: Sequelize.STRING,
      allowNull: false, // or false, depending on your requirements
    });
    await queryInterface.addColumn("cartitems", "ProductId", {
      type: Sequelize.STRING,
      allowNull: false, // or false, depending on your requirements
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("cartitems", "CartId");
    await queryInterface.removeColumn("cartitems", "ProductId");
  },
};
