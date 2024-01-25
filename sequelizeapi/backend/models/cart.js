module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define(
    "Cart",
    {
      total: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
      },
      shipping: {
        type: DataTypes.FLOAT,
        defaultValue: 40,
      },
      discount: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
      },
    },
    { timestamps: false }
  );

  return Cart;
};
