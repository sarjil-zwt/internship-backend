module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Category",
    {
      vName: {
        type: DataTypes.STRING,
      },
      iGroupId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      // Define global allowNull: false constraint for all fields
      allowNull: false,
      tableName: "Category",
      freezeTableName: "Category",
    }
  );

  return Category;
};
