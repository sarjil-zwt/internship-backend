"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Order", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fTotal: {
        type: Sequelize.FLOAT,
      },
      fDiscount: {
        type: Sequelize.FLOAT,
      },
      vCouponCode: {
        type: Sequelize.STRING,
      },
      iUserId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "User",
          key: "id",
        },
      },
      iShippingAddress: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Address",
          key: "id",
        },
      },
      iBillingAddress: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Address",
          key: "id",
        },
      },
      vPaymentId: {
        type: Sequelize.STRING,
      },
      vPaymentStatus: {
        type: Sequelize.STRING,
      },
      eOrderStatus: {
        type: Sequelize.ENUM(["Processing", "In Transit", "Delivered"]),
        defaultValue: "Processing",
      },
      dDeliveredAt: {
        type: Sequelize.DATE,
      },
      iShippingTypeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "ShippingType",
          key: "id",
        },
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
    await queryInterface.dropTable("Order");
  },
};
