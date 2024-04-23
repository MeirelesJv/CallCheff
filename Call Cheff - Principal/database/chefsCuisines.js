const sequelize = require("sequelize");
const connection = require("./database");
const cuisines = require("./cuisines");
const chefs = require("./usersChef");

const chefsCuisines = connection.define('chefsCuisines',{
    Nivel:{
        type: sequelize.STRING,
        allowNull: false,
    },
})


// belongsTo = Pertence a uma ... | Relacionamento 1 para 1.
chefsCuisines.belongsTo(chefs, { foreignKey: 'chefId' });
// belongsTo = Pertence a uma ... | Relacionamento 1 para 1.
chefsCuisines.belongsTo(cuisines, { foreignKey: 'cuisinesId' });

chefsCuisines.sync({force: false}).then(()=>{});
module.exports = chefsCuisines;