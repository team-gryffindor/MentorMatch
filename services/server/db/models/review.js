const review = (sequelize, DataTypes) => {
  const Review = sequelize.define('review', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },

    rating: DataTypes.FLOAT,
    comment: DataTypes.TEXT
  });

  return Review;
};

module.exports = review;
