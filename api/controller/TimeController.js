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
  //let transaction;
  try {
   // transaction = await sequelize.transaction();
    if (times.length > 0) {
      
      times.map(async (time) => {
        result = await Time.create({
          car_id: time.car_id,
          time_out: time.time_out,
          date:time.date
        });
      });
      //await transaction.commit();
      res.status(201).json({"messages" : "create times success"});
    }
  }
  catch (e) {
    //await transaction.rollback();
    next(e);
  }
  res.status(403).json({ "message": "can not use this action" });
}

exports.updateTime = async (req, res, next) => {

}

exports.deleteTime = async (req, res, next) => {
  let transaction;
  let { time_id } = req.body;
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
  if (result > 0) {
    res.status(200).json(`delete success rows : ${result}`);
  }
  else {
    res.status(204).json(`delete success rows : ${result}`);
  }
}

exports.deleteTimeByDateAndByPort = async (req, res, next) => {
  let transaction;
  const dateWhere = moment(new Date(req.params.date)).format('YYYY-MM-DD');
  const port_id = req.params.port_id;
  let result = null;
  try {
    transaction = await sequelize.transaction();

    result = await Time.destroy(
      {
        where: {
          date: dateWhere,
          port_id : port_id
        }, transaction
      });

    await transaction.commit();
  } catch (e) {
    await transaction.rollback();
    next(e);
  }

  if (result > 0) {
    res.status(200).json(`delete success rows : ${result}`);
  }
  else {
    res.status(204).json(`delete success rows : ${result}`);
  }
}

exports.deleteTimeByDate = async (req, res, next) => {
  let transaction;
  const dateWhere = moment(new Date(req.params.date)).format('YYYY-MM-DD');
  let result = null;
  try {
    transaction = await sequelize.transaction();

    result = await Time.destroy(
      {
        where: {
          date: dateWhere,
        }, transaction
      });

    await transaction.commit();
  } catch (e) {
    await transaction.rollback();
    next(e);
  }

  if (result > 0) {
    res.status(200).json(`delete success rows : ${result}`);
  }
  else {
    res.status(204).json(`delete success rows : ${result}`);
  }
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
    order: [["time_out", "ASC"]],
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
    // const dateTimeCurrent = moment(new Date());
    // let timesRes = [];
    // let time = null;
    // result.map((_time,index) => {
    //    time = moment(new Date(dateWhere + " " + _time.time_out));
    //    let diff = dateTimeCurrent.diff(time,'minutes');
    //    if(diff <= -10){
    //       timesRes.push(_time);
    //    }
    // })
  
   res.status(200).json(result);
  });
}


exports.getTimeByPortIdAndByDate = async (req, res, next) => {
  Time.belongsTo(Car, { foreignKey: 'car_id' })
  Car.belongsTo(Port, { foreignKey: 'port_id' })
  const dateWhere = moment(new Date(req.params.date)).format('YYYY-MM-DD');
  Time.findAll({
    order: [["time_out", "ASC"]],
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