const offered = (sequelize, DataTypes) => {
  const Offered = sequelize.define('offered', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    }
  });

  return Offered;
};

module.exports = offered;
