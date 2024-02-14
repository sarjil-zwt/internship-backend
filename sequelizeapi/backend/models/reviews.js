module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    "Review",
    {
      fRating: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
      },
      vReview: {
        type: DataTypes.STRING,
      },
      vTagline: {
        type: DataTypes.STRING,
      },
      iProductId: {
        type: DataTypes.INTEGER,
      },
      iUserId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      // Define global allowNull: false constraint for all fields
      allowNull: false,
      tableName: "Review",
      freezeTableName: "Review",
    }
  );

  return Review;
};
