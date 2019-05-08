const passwordHash = require('password-hash');
const db = require('../../src/database/connection');
const sequelize = db.sequelize;
const User = db.User;


exports.register = async(req,res,next) => {
    let transaction;
    let result = null;
    try{
        transaction = await sequelize.transaction();
        let { username, fname, lname, password,phoneNumber } = req.body;
        result = await User.create({
            username : username,
            fname : fname,
            lname : lname,
            password :  passwordHash.generate(password),
            phoneNumber : phoneNumber,
            type_user : 'CUSTOMER',
        },{ transaction });
        await transaction.commit();
    }catch(e){
        await transaction.rollback();
    }
    if(result){
        res.status(201).json({'message':"Register success"});
    }
    res.status(500).json({'message':"Register fail"});
}