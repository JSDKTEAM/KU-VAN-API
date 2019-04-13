const db = require('../../src/database/connection');
const TimeDefault = db.TimeDefault;
const Schedule = db.Schedule;
const Car = db.Car;
const Port = db.Port;
const sequelize = db.sequelize;


exports.getTimeDefaultByPortId = async (req, res, next) => {
    Schedule.hasMany(TimeDefault, { foreignKey: 'schedule_id' })
    Schedule.findOne({
        where : {port_id : req.params.port_id},
        attributes : ['port_id'],
        include: [
            {
                model : TimeDefault,
                attributes : ['time_default_id','time_out']
            }
        ]
    }).then(result => {
        res.json(result)
    })
}