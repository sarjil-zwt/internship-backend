module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define(
    "Address",
    {
      vFirstname: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      vLastname: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      vPhone: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      vPincode: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      vState: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      vCity: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      vHouse: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      vArea: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      eAddressType: {
        type: DataTypes.ENUM("Home", "Work"),
        defaultValue: "Home",
      },
      iUserId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      // Define global allowNull: false constraint for all fields
      allowNull: false,
      tableName: "Address",
      freezeTableName: "Address",
    }
  );

  return Address;
};
