const sequelize = require("sequelize");
const connection = require("./database");

const cuisines = connection.define('cuisines',{
    Name:{
        type: sequelize.STRING,
        allowNull: false,
    },
    Origin:{
        type: sequelize.STRING,
        allowNull: false,
    },
    Img:{
        type: sequelize.STRING,
        allowNull: false,
    }
})

cuisines.sync({force: false}).then(()=>{});
module.exports = cuisines;