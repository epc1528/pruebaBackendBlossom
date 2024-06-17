require('dotenv').config()
const config = {
    //conexion
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
    migrationStorageTableName: 'migrations' 
}

module.exports = config