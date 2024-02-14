module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define(
    "Group",
    {
      vName: {
        type: DataTypes.STRING,
      },
    },
    {
      // Define global allowNull: false constraint for all fields
      allowNull: false,
      tableName: "Group",
      freezeTableName: "Group",
    }
  );

  return Group;
};
