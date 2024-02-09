module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      vName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      vEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        // unique: true,
      },
      vPassword: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      eRole: {
        type: DataTypes.ENUM("admin", "manager", "user"),
        allowNull: false,
        defaultValue: "admin",
      },
    },
    {
      // Define global allowNull: false constraint for all fields
      allowNull: false,
      tableName: "User",
      freezeTableName: "User",
    }
  );

  return User;
};
