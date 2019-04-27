const convetToJson = require('./utility/resultsToJson');
const db = require('../../src/database/connection');
const Time = db.Time;
const Car = db.Car;
const Port = db.Port;
const sequelize = db.sequelize;
const moment = require('moment');


exports.createTime = async (req, res, next) => {
  let times = req.body.times;
  let result = null;
  let transaction;
  if (req.auth.type_user === "ADMIN") {
    try {
      transaction = await sequelize.transaction();
      if (times.length > 0) {
        times.map(async (time) => {
          result = await Time.create({
            car_id: time.car_id,
            time_out: time.time_out,
            date: time.date
          }, { transaction });
        });
        await transaction.commit();
        res.json(result);
      }
    }
    catch (e) {
      await transaction.rollback();
      next(e);
    }
  }

  res.status(403).json({ "message": "can not use this action" });
}

exports.updateTime = async (req, res, next) => {

}

exports.deleteTime = async (req, res, next) => {
  let transaction;
  let { time_id } = req.body;
  if (req.auth.type_user === "ADMIN") {
    let result = null;
    try {
      transaction = await sequelize.transaction();

      result = await Time.destroy(
        {
          where: {
            time_id: time_id,
          }, transaction
        });

      await transaction.commit();
    } catch (e) {
      await transaction.rollback();
      next(e);
    }
    res.status(200).json(result);
  }

  res.status(403).json({ "message": "can not use this action" });

}

exports.getAllTimes = async (req, res, next) => {
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
  const dateWhere = moment(new Date()).format('YYYY-MM-DD');
  Time.findAll({
    where: { date: dateWhere },
    include: [
      {
        model: Car,
        where: {
          port_id: req.params.port_id,
        },
      }
    ]
  }).then(result => {
    res.json(result);
  });
}