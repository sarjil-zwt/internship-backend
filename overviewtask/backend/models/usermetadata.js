module.exports = (sequelize, DataTypes) => {
  const usermetadata = sequelize.define(
    "usermetadata",
    {
      iUserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      iProjectMetaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      eMetaType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      vSkillLevel: {
        type: DataTypes.STRING,
        allowNull: false,
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
        allowNull: true,
      },
    },
    {
      allowNull: false,
      tableName: "usermetadata",
      freezeTableName: true,
      timestamps: false,
    }
  );

  return usermetadata;
};
