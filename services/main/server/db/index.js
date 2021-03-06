const Sequelize = require('sequelize');
require('dotenv').config();

// Connect to AWS RDS
const db = new Sequelize(process.env.database, process.env.dbuser, process.env.dbpassword, {
  dialect: 'postgres',
  host: process.env.host,
  logging: false,
  port: process.env.dbport,
  protocol: null, //change for heroku maybe?

  operatorsAliases: false,
  dialectOptions: {
    ssl: 'Amazon RDS'
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  language: 'en'
});

// Import all models
const models = {
  User: db.import('./models/user'),
  Lesson: db.import('./models/lesson'),
  Review: db.import('./models/review'),
  Signup: db.import('./models/signup'),
  Favorite: db.import('./models/favorite')
};

Object.keys(models).forEach((key) => {
  'associate' in models[key] ? models[key].associate(models) : null;
});

// ESTABLISH ASSOCATION AMONGST TABLES
// User to lesson is a one to many relationship
models.User.hasMany(models.Lesson); // userId
// User to review is a one to many relationship
models.User.hasMany(models.Review);
// Lesson to review is a one to many relationship
models.Lesson.hasMany(models.Review);

// Signup is a join table for User and Lesson
// models.User.belongsToMany(models.Lesson, { through: models.Signup, foreignKey: 'userId' });
// models.Lesson.belongsToMany(models.User, { through: models.Signup, foreignKey: 'lessonId' });

models.Signup.belongsTo(models.Lesson, { foreignKey: 'lessonId' });
models.Signup.belongsTo(models.User, { foreignKey: 'userId' });

// Favorite is a join table for User and Lesson
models.User.belongsToMany(models.Lesson, { through: models.Favorite });
models.Lesson.belongsToMany(models.User, { through: models.Favorite });

// Export out to be used in GraphQL
models.db = db;
models.Sequelize = Sequelize;
module.exports = models;
