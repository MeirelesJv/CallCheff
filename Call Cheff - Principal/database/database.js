const sequelize = require("sequelize");
const connection = new sequelize('CallCheff','goflash','b2u#123!',{
    host: 'DESKTOP-T6H3BV3\\\SQLEXPRESS',
    dialect: 'mssql',
    port: 1433,
    timezone: '-03:00'
});

module.exports = connection;