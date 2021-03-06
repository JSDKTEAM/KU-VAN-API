const Sequelize = require('sequelize');
require('dotenv/config');


// Option 1: Passing parameters separately
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME,process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAiases : false,
  // dialectOptions: {
  //   useUTC: false //for reading from database
  // },
  timezone: '+07:00' //for writing to database
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//import model
db.Car = require('../models/Car')(sequelize, Sequelize);
db.Port = require('../models/Port')(sequelize, Sequelize);
db.Reserve = require('../models/Reserve')(sequelize, Sequelize);
db.ReserveHistory = require('../models/ReserveHistory')(sequelize, Sequelize);
db.Schedule = require('../models/Schedule')(sequelize, Sequelize);
db.Time = require('../models/Time')(sequelize, Sequelize);
db.TimeDefault = require('../models/TimeDefault')(sequelize, Sequelize);
db.User = require('../models/User')(sequelize, Sequelize);


module.exports = db;

// module.exports = sequelize;
// global.sequelize = sequelize;