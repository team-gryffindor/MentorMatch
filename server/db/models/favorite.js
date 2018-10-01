const favorite = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('favorite', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    }
  });

  return Favorite;
};

module.exports = favorite;
