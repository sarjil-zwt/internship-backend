module.exports = (sequelize, DataTypes) => {
  const ShippingType = sequelize.define(
    "ShippingType",
    {
      fCharge: {
        type: DataTypes.FLOAT,
        defaultValue: 40,
      },
      vName: {
        type: DataTypes.STRING,
      },
    },
    {
      // Define global allowNull: false constraint for all fields
      allowNull: false,
      tableName: "ShippingType",
      freezeTableName: "ShippingType",
    }
  );

  return ShippingType;
};
