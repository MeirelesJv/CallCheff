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
        allowNull: false
    },
    LastName:{
        type: sequelize.STRING,
        allowNull: false
    },
    Cpf:{
        type: sequelize.STRING,
        allowNull: false
    },
    Birthday:{
        type: sequelize.DATEONLY,
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
    House:{
        type: sequelize.STRING,
        allowNull: false
    },
    Reference:{
        type: sequelize.STRING,
        allowNull: true,
        defaultValue: null
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

Users.sync({force: false}).then(()=>{});
module.exports = Users;