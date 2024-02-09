"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Product", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fPrice: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
      },
      vTitle: {
        type: Sequelize.STRING,
      },
      vImage: {
        type: Sequelize.STRING,
      },
      tDescription: {
        type: Sequelize.TEXT,
      },
      fRatings: {
        type: Sequelize.FLOAT,
      },
      iSubCategoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "SubCategory",
          key: "id",
        },
      },
      dDeletedAt: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable("Product");
  },
};
