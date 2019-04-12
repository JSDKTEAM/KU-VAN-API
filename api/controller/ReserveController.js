const convetToJson = require('./utility/resultsToJson');
const db = require('../../src/database/connection');
const sequelize = db.sequelize;
const Reserve = db.Reserve;
const Time = db.Time;

exports.getAllReserve = async(req,res,next) => {
    // const [result] = await sequelize.query(`SELECT * FROM Reserve 
    //                                         INNER JOIN User ON User.user_id = Reserve.user_id`);
    
}