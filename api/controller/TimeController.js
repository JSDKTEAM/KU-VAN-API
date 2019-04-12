const convetToJson = require('./utility/resultsToJson');
const db = require('../../src/database/connection');
const Time = db.Time;
const Car = db.Car;
const Port = db.Port;
const sequelize = db.sequelize;


exports.createTimeByPortId = async (req, res, next) => {
  try {
    if (req.body.times.length > 0) {
      req.body.times.map(async(time) => {
        let result = await Time.create({
          car_id: req.body.car_id,
          time_out: req.body.time_out,
          date: req.body.date
        });
      });
      res.json(result);
    }
  }
  catch (e) {

  }
}

exports.getTimeByPortId = async (req, res, next) => {
  Time.belongsTo(Car,{ foreignKey: 'car_id' })
  Car.belongsTo(Port,{ foreignKey: 'port_id' })
  Time.findAll({
    include : [
      {
        model : Car,
        where : {port_id:req.body.port_id},
      }
    ]
  }).then(result => {
    res.json(result);
  });
  // const result = await sequelize.query(`SELECT 
  //                                          Time.time_id,Time.time_out,
  //                                          Car.license_plate,Car.province,
  //                                          Port.name
  //                                          FROM Time 
  //                                          INNER JOIN Car ON Time.car_id = Car.car_id
  //                                          INNER JOIN Port on Port.port_id = Car.port_id
  //                                          WHERE Port.port_id = ?`, { replacements: [req.body.port_id], type: sequelize.QueryTypes.SELECT });
  
}