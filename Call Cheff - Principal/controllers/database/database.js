const sequelize = require("sequelize");
const connection = new sequelize('CallCheff','goflash','b2u#123!',{
    host: 'DESKTOP-06QTB5J\\\SQLEXPRESS',
    dialect: 'mssql',
    timezone: '-03:00'
});

module.exports = connection;