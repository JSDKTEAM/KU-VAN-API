const passwordHash = require('password-hash');
const db = require('../../connection');


exports.addUser = (req, res, next) => {
    let user = [
        req.body.username,
        passwordHash.generate(req.body.pwd),
        req.body.fname,
        req.body.lname,
        req.body.type_user
    ]
    let sql = "INSERT INTO TB_USER(username,pwd,fname,lname,type_user) VALUES(?,?,?,?,?)";
    db.query(sql, user, (error, results) => {
        if (error) { }
        res.status(201).json(user);
    })

}

exports.getAllUser = (req, res, next) => {
    let sql = "SELECT * FROM TB_USER";
    //console.log(req.userData.type_user)
    //let type_user = req.userData.type_user
    if (true) {
        db.query(sql, (error, results) => {
            if (error) {
                return next(error);
            }
            res.status(200).json(results);
        })
    }
    else {
        res.status(403).json({
            message: "Not Premisson"
        })
    }
}
