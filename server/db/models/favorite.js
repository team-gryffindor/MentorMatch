const favorite = (db, DataTypes) => {
  const Favorite = db.define('favorite', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    }
  });

  return Favorite;
};

module.exports = favorite;
