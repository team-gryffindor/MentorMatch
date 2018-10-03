const favorite = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('favorite', {
    // id: {
    //   type: DataTypes.UUID,
    //   defaultValue: DataTypes.UUIDV1,
    //   primaryKey: true
    // }
    // incrementing INTEGER id for easy development
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true }
  });

  return Favorite;
};

module.exports = favorite;
