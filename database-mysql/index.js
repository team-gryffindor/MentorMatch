// Boilerplate code for DB
const Sequelize = require('sequelize');

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

const models = {
  User: sequelize.import('./models/user'),
  Service: sequelize.import('./models/service'),
  Review: sequelize.import('./models/review'),
  Consumed: sequelize.import('./models/consumed'),
  Offered: sequelize.import('./models/offered'),
  Favorite: sequelize.import('./models/favorite')
};

module.exports = db;
//////////////////////////////////////////////////////
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const models = {
  User: sequelize.import('./models/user'),
  Match: sequelize.import('./models/match'),
  Court: sequelize.import('./models/court')
};

Object.keys(models).forEach((key) => {
  'associate' in models[key] ? models[key].associate(models) : null;
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;
models.Op = Op;
module.exports = models;
