var mysql = require('mysql')

module.exports= function () {
    return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:  '1111',
    database: 'oasis_dancas'
})}