const sequelize = require("sequelize");
const connection = require("./database");

const Users = connection.define('Users',{
    Email:{
        type: sequelize.STRING,
        allowNull: false
    },
    Password:{
        type: sequelize.STRING,
        allowNull: false
    },
    Name:{
        type: sequelize.STRING,
        allowNull: true,
        defaultValue: null
    }
    
})


Users.sync({force: false}).then(()=>{});
module.exports = Users;