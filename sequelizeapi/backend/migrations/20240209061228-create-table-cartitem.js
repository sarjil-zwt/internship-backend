"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("CartItem", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      iQuantity: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      iCartId: {
        type: Sequelize.INTEGER,
        allowNull: false, // Add this line to enforce the foreign key constraint
        references: {
          model: "Cart",
          key: "id",
        },
        onDelete: "cascade", // Add this line if you want to cascade delete cart items when a cart is deleted
      },
      iProductId: {
        type: Sequelize.INTEGER,
        allowNull: false, // Add this line to enforce the foreign key constraint
        references: {
          model: "Product",
          key: "id",
        },
        onDelete: "cascade",
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
    await queryInterface.dropTable("CartItem");
  },
};
