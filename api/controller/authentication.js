require('dotenv/config');
const passwordHash = require('password-hash');
const jwt = require('jsonwebtoken');
const db = require('../../connection');
const convetToJson = require('./utility/resultsToJson');

exports.login = (req, res, next) => {
    let sql = "SELECT * FROM User WHERE username = ?";
    db.query(sql, req.body.username, (error, results) => {
        let user = convetToJson.resultsToJson(results[0]);
        let check_pwd = passwordHash.verify(req.body.pwd, user.pwd);
        if (check_pwd) {
            const token = jwt.sign({
                username: user.username,
                type_user: user.type_user
            }, process.env.JWT_KEY,
                {
                    expiresIn: "1h"
                }
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
    });
};


