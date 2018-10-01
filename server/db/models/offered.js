const offered = (db, DataTypes) => {
  const Offered = db.define('offered', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    }
  });

  return Offered;
};

module.exports = offered;
