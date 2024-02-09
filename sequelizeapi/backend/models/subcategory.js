module.exports = (sequelize, DataTypes) => {
  const SubCategory = sequelize.define(
    "SubCategory",
    {
      iCategoryId: {
        type: DataTypes.INTEGER,
      },
      vName: {
        type: DataTypes.STRING,
      },
    },
    {
      // Define global allowNull: false constraint for all fields
      allowNull: false,
      tableName: "SubCategory",
      freezeTableName: "SubCategory",
    }
  );

  return SubCategory;
};
