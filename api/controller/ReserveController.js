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
            if (req.auth.type_user !== "ADMIN") {
                result = await Reserve.create({
                    time_id: time_id,
                    user_id: req.auth.user_id,
                    destination: destination,
                }, { transaction });
            }
            else {
                result = await Reserve.create({
                    time_id: time_id,
                    user_id: req.auth.user_id,
                    destination: destination,
                    phoneNumberWalkIn: phoneNumberWalkIn,
                    nameWalkIn: nameWalkIn,
                }, { transaction });
            }

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

        await transaction.commit();

    } catch (e) {
        await transaction.rollback();
        next(e);
    }
    res.status(201).json(result);
}


exports.getReserveByUserId = async (req, res, next) => {
    Reserve.belongsTo(Time, { foreignKey: 'time_id' });
    Time.belongsTo(Car, { foreignKey: 'car_id' });
    Car.hasMany(Time, { foreignKey: 'car_id' });
    let result = await Reserve.findAll({
        where: { user_id: req.auth.user_id },
        include: [
            {
                model: Time,
                include: [
                    {
                        model: Car,
                    }
                ]
            }
        ]
    })

    res.status(200).json(result);
};

exports.commentReserve = async (req, res, next) => {
    let { reserve_id, comment } = req.body;
    let result = null;
    try {
        transaction = await sequelize.transaction();
        result = await Reserve.update({
            comment: comment,
        }, {
                where: {
                    reserve_id: reserve_id,
                    user_id: req.auth.user_id
                },
                transaction
            });
        await transaction.commit();
    }
    catch (e) {
        await transaction.rollback();
        next(e);
    }

    if(result[0]){
        res.status(200).json({"messages" : "update comment success"});
    }
    else{
        res.status(500).json({"messages" : "update comment error"});
    }
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

    if (result > 0) {
        res.status(200).json({ "messages": `delete reserve success` });
    }
    else {
        res.status(500).json({ "messages": `delete reserve error` });
    }
}

exports.getReserveByTime = async (req, res, next) => {
    Car.belongsTo(Port, { foreignKey: 'port_id' });
    Time.belongsTo(Car, { foreignKey: 'car_id' });
    Time.hasMany(Reserve, { foreignKey: 'time_id' });
    Reserve.belongsTo(User, { foreignKey: 'user_id' });
    Time.findOne({
        where: { time_id: req.params.time_id },

        attributes: ['time_id', 'count_seat', 'time_out', 'date'],
        include: [
            {
                model: Reserve,
                separate: true,
                order: [["createdAt", "ASC"]],
                include: [
                    {
                        model: User,
                        attributes: ['user_id', 'username', 'fname', 'lname'],
                    }
                ],

            },
            {
                model: Car,
                include: [
                    {
                        model: Port,
                        attributes: ['name'],
                    }
                ]
            },
        ],

    }).then(result => {
        res.status(200).json(result);
    })
}

exports.getReserveByPort = async (req, res, next) => {
    User.hasMany(Reserve, { foreignKey: 'reserve_id' })
    Reserve.belongsTo(User, { foreignKey: 'user_id' });
    Reserve.belongsTo(Time, { foreignKey: 'time_id' });
    Time.hasMany(Reserve, { foreignKey: 'time_id' });
    Time.belongsTo(Car, { foreignKey: 'car_id' });
    Reserve.findAll({
        order: [["createdAt", "ASC"]],
        include: [
            {
                model: Time,
                attributes: ['time_id', 'time_out'],
                required: false,
                include: [
                    {
                        model: Car,
                        required: true,
                        where: { port_id: req.params.port_id },
                        // /attributes: ['port_id'],
                    }
                ]
            },
            {
                model: User,
                attributes: ['user_id', 'username', 'fname', 'lname', 'phoneNumber'],
            },
        ],
    }).then(result => {
        res.status(200).json(result);
    })
}

exports.updateIsCame = async (req, res, next) => {
    let transaction;
    let result = null;
    try {
        transaction = await sequelize.transaction();
        let { reserve_id, isCame } = req.body;
        result = await Reserve.update({
            isCame: isCame
        }, {
                where: { reserve_id: reserve_id },
                transaction
            });
        await transaction.commit();
        //res.status(200).json(result);
    } catch (e) {
        await transaction.rollback();
        next(e);
    }

    if (result[0]) {
        res.status(200).json({ "messages": `update reserve is came success` });
    }
    else {
        res.status(500).json({ "messages": `update reserve is came fail` });
    }
}