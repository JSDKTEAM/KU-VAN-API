require('dotenv/config');
const convetToJson = require('./utility/resultsToJson');
const passwordHash = require('password-hash');
const jwt = require('jsonwebtoken');
const db = require('../../src/database/connection');
const User = db.User;

exports.getUserAccount = async(req,res,next) => {
    User.findOne({
        where : {user_id : req.auth.user_id},
        attributes : ['user_id','username','fname','lname','phoneNumber']
    }).then(result => {
        res.status(200).json(result);
    })
}



exports.login = async (req, res, next) => {
    let user = await User.findOne({
        where: { username: req.body.username },
    });
    let { user_id, username, password, type_user } = user.dataValues;
    let checkPwd = passwordHash.verify(req.body.password, password);
    if (checkPwd) {
        const token = jwt.sign({
            user_id: user_id,
            username: username,
            type_user: type_user
        }, process.env.JWT_KEY
        )
        res.status(201).json({
            message: "Autn successful",
            token: token
        });
    }
    else {
        res.status(401).json({
            message: "username or password not corrent"
        });
    }
}