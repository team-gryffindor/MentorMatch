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
      type: DataTypes.UUID,
      unique: true
      // primaryKey: true
    },
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.TEXT,
    cityOfResidence: DataTypes.STRING
  });

  return User;
};

module.exports = user;
