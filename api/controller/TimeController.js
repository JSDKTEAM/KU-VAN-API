const convetToJson = require('./utility/resultsToJson');
const db = require('../../src/database/connection');
const Time = db.Time;
const sequelize = db.sequelize;


exports.addTimeByPortId = async (req, res, next) => {
  if (req.body.times.length > 0) {
    req.body.times.map(time => {
      Time.create({
        car_id: req.body.car_id,
        time_out: req.body.time_out,
        date: req.body.date
      });
    });
  }
}

exports.getTimeByPortId = async (req, res, next) => {
  const result = await sequelize.query(`SELECT 
                                           Time.time_id,Time.time_out,
                                           Car.license_plate,Car.province,
                                           Port.name
                                           FROM Time 
                                           INNER JOIN Car ON Time.car_id = Car.car_id
                                           INNER JOIN Port on Port.port_id = Car.port_id
                                           WHERE Port.port_id = ?`, { replacements: [req.body.port_id], type: sequelize.QueryTypes.SELECT });
  res.json(result);
}