const convetToJson = require('./utility/resultsToJson');
const db = require('../../src/database/connection');
const sequelize = db.sequelize;
const User = db.User;

const Car = db.Car;
const Port = db.Port;


exports.getCarsByPortId = async (req, res, next) => {
    Car.belongsTo(Port, { foreignKey: 'port_id' });
    Car.findAll({
        where: { port_id: req.params.port_id },
        include:
            [
                {
                    model: Port,
                }
            ]
    }).then(result => {
        res.json(result);
    })
}

exports.createCarByPortId = async (req, res, next) => {
    let transaction;
    let result = null;
    try {
        transaction = await sequelize.transaction();
        let { license_plate, province, port_id } = req.body;
        result = await Car.create({
            license_plate: license_plate,
            province: province,
            port_id: port_id
        }, { transaction });
        await transaction.commit();
    } catch (e) {
        await transaction.rollback();
        console.log(e);
    }
    res.status(201).json(result);
}



exports.updateCar = async (req, res, next) => {
    let transaction;
    let result = null;
    try {
        transaction = await sequelize.transaction();
        let { license_plate, province, car_id } = req.body;
        result = await Car.update({
            license_plate: license_plate,
            province: province,
        }, {
                where: { car_id: car_id },
                transaction
            });
        await transaction.commit();
    } catch (e) {
        await transaction.rollback();
        console.log(e);
    }

    if(result[0]){
        res.status(200).json({"messages" : "update car success"});
    }
    else{
        res.status(500).json({"messages" : "update car error"});
    }
}

exports.deleteCar = async (req, res, next) => {
    let transaction;
    let result = null;
    try {
        transaction = await sequelize.transaction();
        let { car_id } = req.body;
        result = await Car.destroy({
            where: { car_id: car_id },
        }, { transaction });
        await transaction.commit();
    } catch (e) {
        await transaction.rollback();
        console.log(e);
    }
    if(result > 0){
        res.status(200).json({"messages" : "delete car success"});
    }
    else{
        res.status(500).json({"messages" : "delete car error"});
    }
}