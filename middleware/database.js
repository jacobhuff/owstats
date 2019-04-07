var mysql = require('mysql');
var util = require('util');

con = mysql.createPool({
    connectionLimit: 5,
    host: "us-cdbr-iron-east-03.cleardb.net",
    user: "b36316edd924f8",
    password: "5be475dd",
    database: "heroku_1ef99365d4913c4"
});

con.query = util.promisify(con.query);

module.exports = con;