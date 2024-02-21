module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      fTotal: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
      },
      fDiscounted: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
      },
      fGrandTotal: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
      },
      fTotalTax: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
      },
      fDiscount: {
        type: DataTypes.FLOAT,
      },
      vCouponCode: {
        type: DataTypes.STRING,
      },
      iUserId: {
        type: DataTypes.INTEGER,
      },
      iShippingAddress: {
        type: DataTypes.INTEGER,
      },
      iBillingAddress: {
        type: DataTypes.INTEGER,
      },
      vPaymentId: {
        type: DataTypes.STRING,
      },
      vPaymentStatus: {
        type: DataTypes.STRING,
      },
      eOrderStatus: {
        type: DataTypes.ENUM(["Processing", "In Transit", "Delivered"]),
        defaultValue: "Processing",
      },
      dDeliveredAt: {
        type: DataTypes.DATE,
      },
      iShippingTypeId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      // Define global allowNull: false constraint for all fields
      allowNull: false,
      tableName: "Order",
      freezeTableName: "Order",
    }
  );

  return Order;
};
