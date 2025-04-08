var mysql = require('mysql')

let connectionMySQL = function () {
    return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:  '1111',
    database: 'oasis_dancas'
})}

module.exports= function(){
return connectionMySQL;
}