module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      price: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
      },
      title: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.TEXT,
      },
    },
    { timestamps: false }
  );

  return Product;
};
