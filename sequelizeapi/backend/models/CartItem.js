module.exports = (sequelize, DataTypes) => {
  const CartItem = sequelize.define(
    "CartItem",
    {
      quantity: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
      },
    },
    { timestamps: false }
  );

  return CartItem;
};
