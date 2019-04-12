const mysql = require('mysql');
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "KU_VAN",
    port: "3306",
});

db.connect();

module.exports = db;