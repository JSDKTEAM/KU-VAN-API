const convetToJson = require('./utility/resultsToJson');
const db = require('../../src/database/connection');
const sequelize = db.sequelize;
const User = db.User;
const Reserve = db.Reserve;
const Car = db.Car;
const Time = db.Time;
const Port = db.Port;


exports.getPortById = async (req, res, next) => {
    // Port.hasMany(Car,{ foreignKey: 'car_id' });
    // Car.hasMany(Time,{ foreignKey: 'car_id' });

    // Port.findOne({
    //     where : {port_id : req.body.port_id},
    //     include : [
    //         {
    //             model : Car,
    //             include : [
    //                 {
    //                     model : Time
    //                 },
    //             ]
    //         },
    //     ]
    // }).then(result => {
    //     res.json(result);
    // })
    
}