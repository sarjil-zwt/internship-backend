module.exports = (sequelize, DataTypes) => {
  const projectmeta = sequelize.define(
    "projectmeta",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      iOldTableId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      eMetaType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      vName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      iCategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      iOrderNo: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      eStatus: {
        type: DataTypes.ENUM("Inactive", "Active"),
        allowNull: false,
        defaultValue: "Active",
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      deleted_at: {
        type: DataTypes.DATE,
        allowNull: true, // Assuming it can be null
      },
    },
    {
      // Define global allowNull: false constraint for all fields
      allowNull: false,
      tableName: "projectmeta",
      freezeTableName: true,
      timestamps: false,
    }
  );

  return projectmeta;
};
