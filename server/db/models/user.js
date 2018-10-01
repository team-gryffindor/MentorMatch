const user = (db, DataTypes) => {
  const User = db.define('user', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },

    // firebase unique user id
    uid: {
      type: DataTypes.STRING,
      unique: true
    },
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.TEXT,
    cityOfResidence: DataTypes.STRING
  });

  return User;
};

module.exports = user;
