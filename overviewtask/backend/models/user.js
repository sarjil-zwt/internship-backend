module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      eType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      iRelId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      eRoleType: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      iOldTableId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      vFirstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      vLastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      vProfileImg: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      jLastPasswords: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      remember_token: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      code: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      vAltEmailId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      vContactNum: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      vAltContactNum: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      eNDAProtected: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      eIsAgency: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      eBillable: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      eAllowLogin: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      eDisplayDeveloperName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      eEmailNotification: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      vCountryName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      iCountryId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      dLastPasswordChangeDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      eEnableGoogle2fa: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      vDateFormat: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      vDeviceType: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      vDeviceToken: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      iIsTimelogRequired: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      vCompanyName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      vCurrency: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      vRateType: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fDefaultRate: {
        type: DataTypes.FLOAT,
        allowNull: true,
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
      // Define global allowNull: false constraint for all fields
      allowNull: false,
      tableName: "user",
      freezeTableName: true,
      timestamps: false,
    }
  );

  return user;
};
