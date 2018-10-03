const lesson = (sequelize, DataTypes) => {
  const Lesson = sequelize.define('lesson', {
    // id: {
    //   type: DataTypes.UUID,
    //   defaultValue: DataTypes.UUIDV1,
    //   primaryKey: true
    // },
    // incrementing INTEGER id for easy development
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    cityOfService: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    title: DataTypes.STRING,
    difficulty: DataTypes.STRING,
    category: DataTypes.STRING
  });
  return Lesson;
};

module.exports = lesson;
