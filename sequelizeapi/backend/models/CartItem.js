module.exports = (sequelize, DataTypes) => {
  const CartItem = sequelize.define(
    "CartItem",
    {
      iQuantity: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      iCartId: {
        type: DataTypes.INTEGER,
      },
      iProductId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      // Define global allowNull: false constraint for all fields
      allowNull: false,
      tableName: "CartItem",
      freezeTableName: "CartItem",
    }
  );

  return CartItem;
};
