const lesson = (sequelize, DataTypes) => {
  const Lesson = sequelize.define('lesson', {
    // id: {
    //   type: DataTypes.UUID,
    //   defaultValue: DataTypes.UUIDV1,
    //   primaryKey: true
    // },
    // incrementing INTEGER id for easy development
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    locationOfService: DataTypes.STRING,
    cityOfService: DataTypes.STRING,
    stateOfService: DataTypes.STRING,
    lat: DataTypes.FLOAT,
    lng: DataTypes.FLOAT,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    title: DataTypes.STRING,
    difficulty: DataTypes.STRING,
    category: DataTypes.STRING,
    price: DataTypes.FLOAT,
    isActive: { type: DataTypes.BOOLEAN, defaultValue: true },
    avgRating: { type: DataTypes.FLOAT, defaultValue: 0 },
    numOfReviews: { type: DataTypes.INTEGER, defaultValue: 0 }
  });
  return Lesson;
};

module.exports = lesson;
