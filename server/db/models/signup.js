const signup = (sequelize, DataTypes) => {
  const Signup = sequelize.define('signup', {
    // id: {
    //   type: DataTypes.UUID,
    //   defaultValue: DataTypes.UUIDV1,
    //   primaryKey: true
    // },
    // incrementing INTEGER id for easy development
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    date: DataTypes.DATE
  });

  return Signup;
};

module.exports = signup;
