module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define(
    "OrderItem",
    {
      iOrderId: {
        type: DataTypes.INTEGER,
      },
      iProductId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      // Define global allowNull: false constraint for all fields
      allowNull: false,
      tableName: "OrderItem",
      freezeTableName: "OrderItem",
    }
  );

  return OrderItem;
};
