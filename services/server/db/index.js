// Boilerplate code for DB
const Sequelize = require('sequelize');

// Connect to AWS RDS
const db = new Sequelize(process.env.database, process.env.dbuser, process.env.dbpassword, {
  dialect: 'postgres',
  host: process.env.host,
  port: process.env.port,
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
  User: sequelize.import('./models/user'),
  Lesson: sequelize.import('./models/lesson'),
  Review: sequelize.import('./models/review'),
  Consumed: sequelize.import('./models/consumed'),
  Offered: sequelize.import('./models/offered'),
  Favorite: sequelize.import('./models/favorite')
};

Object.keys(models).forEach((key) => {
  'associate' in models[key] ? models[key].associate(models) : null;
});

// ESTABLISH ASSOCATION AMONGST TABLES
// User to lesson is a one to many relationship
models.User.hasMany(Lesson);
// User to review is a one to many relationship
models.User.hasMany(Review);
// Lesson to review is a one to many relationship
models.Lesson.hasMany(Review);

// Consumed is a join table for User and Lesson
models.User.belongsToMany(Lesson, { through: models.Consumed });
models.Lesson.belongsToMany(User, { through: models.Consumed });
// Offered is a join table for User and Lesson
models.User.belongsToMany(Lesson, { through: models.Offered });
models.Lesson.belongsToMany(User, { through: models.Offered });
// Favorite is a join table for User and Lesson
models.User.belongsToMany(Lesson, { through: models.Favorite });
models.Lesson.belongsToMany(User, { through: models.Favorite });

// Export out to be used in GraphQL
models.db = db;
models.Sequelize = Sequelize;
module.exports = models;
