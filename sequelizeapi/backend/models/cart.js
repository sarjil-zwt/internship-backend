module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define(
    "Cart",
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
        defaultValue: 0,
      },
      vCouponcode: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      iShippingTypeId: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },
      iUserId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      // Define global allowNull: false constraint for all fields
      allowNull: false,
      tableName: "Cart",
      freezeTableName: "Cart",
    }
  );

  return Cart;
};
