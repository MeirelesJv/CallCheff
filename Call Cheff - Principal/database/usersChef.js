const sequelize = require("sequelize");
const connection = require("./database");

const usersChef = connection.define('usersChef',{
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
        allowNull: false
    },
    LastName:{
        type: sequelize.STRING,
        allowNull: false
    },
    Cnpj:{
        type: sequelize.STRING,
        allowNull: false
    },
    Cep:{
        type: sequelize.INTEGER,
        allowNull: false
    },
    Rua:{
        type: sequelize.STRING,
        allowNull: false
    },
    NumberHouse:{
        type: sequelize.INTEGER,
        allowNull: false
    },
    Bairro:{
        type: sequelize.STRING,
        allowNull: false,
    },
    Cidade:{
        type: sequelize.STRING,
        allowNull: false,
    },
    Uf:{
        type: sequelize.STRING,
        allowNull: false,
    },
    Tel:{
        type: sequelize.BIGINT(11),
        allowNull: false

    },
    Latitude:{
        type: sequelize.STRING,
        allowNull: false,
    },
    Longitude:{
        type: sequelize.STRING,
        allowNull: false,
    },
})

usersChef.sync({force: false}).then(()=>{});
module.exports = usersChef;