const user = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    // id: {
    //   type: DataTypes.UUID,
    //   defaultValue: DataTypes.UUIDV1,
    //   primaryKey: true
    // },
    // incrementing INTEGER id for easy development
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    // firebase unique user id
    // TODO: wait for signup
    uid: {
      type: DataTypes.STRING,
      unique: true
      // primaryKey: true
    },
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.TEXT,
    locationOfResidence: DataTypes.STRING,
    cityOfResidence: DataTypes.STRING,
    stateOfResidence: DataTypes.STRING,
    lat: DataTypes.FLOAT,
    lng: DataTypes.FLOAT
  });

  return User;
};

module.exports = user;
