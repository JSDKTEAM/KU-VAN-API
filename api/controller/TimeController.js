const convetToJson = require('./utility/resultsToJson');
const db = require('../../src/database/connection');
const Time = db.Time;
const Car = db.Car;
const Port = db.Port;
const sequelize = db.sequelize;


exports.createTime = async (req, res, next) => {
  let  times  = req.body.times;
  let result = null;
  try {
    if (times.length > 0) {
      times.map(async (time) => {
        result = await Time.create({
          car_id: time.car_id,
          time_out: time.time_out,
          date: time.date
        });
      });
      res.json(result);
    }
  }
  catch (e) {

  }
}

exports.getAllTimes = async(req,res,next) => {
  Time.belongsTo(Car, { foreignKey: 'car_id' })
  Car.belongsTo(Port, { foreignKey: 'port_id' })
  Time.findAll({
    include: [
      {
        model: Car,
      }
    ]
  }).then(result => {
    res.json(result);
  });
}

exports.getTimeByPortId = async (req, res, next) => {
  Time.belongsTo(Car, { foreignKey: 'car_id' })
  Car.belongsTo(Port, { foreignKey: 'port_id' })
  Time.findAll({
    include: [
      {
        model: Car,
        where: { port_id: req.params.port_id },
      }
    ]
  }).then(result => {
    res.json(result);
  });
}