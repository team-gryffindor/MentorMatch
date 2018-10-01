const consumed = (db, DataTypes) => {
  const Consumed = db.define('consumed', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    date: DataTypes.DATE
  });

  return Consumed;
};

module.exports = consumed;
