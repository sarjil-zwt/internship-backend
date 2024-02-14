module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      fPrice: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
      },
      vTitle: {
        type: DataTypes.STRING,
      },
      vImage: {
        type: DataTypes.STRING,
      },
      tDescription: {
        type: DataTypes.TEXT,
      },
      fRatings: {
        type: DataTypes.FLOAT,
      },
      iSubCategoryId: {
        type: DataTypes.INTEGER,
      },
      dDeletedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      // Define global allowNull: false constraint for all fields
      allowNull: false,
      tableName: "Product",
      freezeTableName: "Product",
    }
  );

  return Product;
};
