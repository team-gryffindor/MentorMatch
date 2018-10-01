const review = (db, DataTypes) => {
  const Review = db.define('review', {
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
