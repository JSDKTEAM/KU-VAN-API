const convetToJson = require('./utility/resultsToJson');
const db = require('../../src/database/connection');
const sequelize = db.sequelize;
const User = db.User;
const Reserve = db.Reserve;
const Car = db.Car;
const Time = db.Time;
const Port = db.Port;

exports.createReserve = async (req, res, next) => {
    let transaction;
    let result = null;
    let updateTime = null;
    try {
        transaction = await sequelize.transaction();
        let { time_id, phoneNumberWalkIn, nameWalkIn, destination } = req.body;
        let [port] = await sequelize.query(`SELECT * FROM Time 
                                          INNER JOIN Car ON Car.car_id = Time.car_id
                                          INNER JOIN Port ON Port.port_id = Car.port_id
                                          WHERE Time.time_id = ?`, { replacements: [req.body.time_id], type: sequelize.QueryTypes.SELECT });
        if (port.count_seat < port.number_of_seats) {
            if (req.auth.type_user === "CUSTOMER") {
                result = await Reserve.create({
                    time_id: time_id,
                    user_id: req.auth.user_id,
                    destination: destination,
                }, { transaction });

                updateTime = await Time.update(
                    { count_seat: ++port.count_seat },
                    {
                        where: { time_id: time_id },
                        transaction
                    }
                )

                res.io.emit("broadcast", {
                    time_id: time_id,
                    count_seat: port.count_seat
                });

            }
            else {

            }
        }

        await transaction.commit();

    } catch (e) {
        await transaction.rollback();
        next(e);
    }
    res.status(201).json(result);
}

exports.cancelReserve = async (req, res, next) => {
    let transaction;
    let { time_id, reserve_id } = req.body;
    let result = null;
    try {
        transaction = await sequelize.transaction();

        if (req.auth.type_user === "CUSTOMER") {
            result = await Reserve.destroy(
                {
                    where: {
                        reserve_id: reserve_id,
                        time_id: time_id,
                        user_id: req.auth.user_id
                    }, transaction
                });
        }
        else {
            result = await Reserve.destroy(
                {
                    where: {
                        reserve_id: reserve_id,
                        time_id: time_id,
                    }, transaction
                });
        }

        if (result) {
            let resultTime = await Time.findOne({ where: { time_id: time_id } });
            if (resultTime.dataValues.count_seat) {

                await Time.update(
                    { count_seat: --resultTime.dataValues.count_seat },
                    { where: { time_id: time_id }, transaction }
                )

                res.io.emit("broadcast", {
                    time_id: time_id,
                    count_seat: resultTime.dataValues.count_seat
                });
            }
        }

        await transaction.commit();
    } catch (e) {
        console.log(e);
        await transaction.rollback();
        next(e);
    }
    res.status(200).json(result);
}

exports.getReserveByTime = async (req, res, next) => {
    Car.belongsTo(Port, { foreignKey: 'port_id' });
    Time.belongsTo(Car, { foreignKey: 'car_id' });
    Time.hasMany(Reserve, { foreignKey: 'time_id' });
    Reserve.belongsTo(User, { foreignKey: 'user_id' });

    Time.findOne({
        where: { time_id: req.body.time_id },
        attributes: ['time_id','count_seat','time_out','date'],
        include: [
            {
                model: Reserve,
                include: [
                    { 
                        model: User,
                        attributes: ['user_id','username','fname','lname'],
                    }
                ]
            },
            {
                model: Car,
                include: [
                    { 
                        model: Port ,
                        attributes: ['name'],
                    }
                ]
            },
        ]
    }).then(result => {
        res.status(200).json(result);
    })
}