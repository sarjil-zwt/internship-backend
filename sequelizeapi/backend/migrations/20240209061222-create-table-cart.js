"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Cart", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fTotal: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
      },
      fDiscount: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
      },
      vCouponcode: {
        type: Sequelize.STRING,
        defaultValue: "",
      },
      iShippingTypeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "ShippingType",
          key: "id",
        },
        onDelete: "cascade",
      },
      iUserId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "User",
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
    await queryInterface.dropTable("Cart");
  },
};
