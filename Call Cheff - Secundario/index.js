const express = require("express");
const app = express();
const bodyParse = require("body-parser");
const connection = require("./database/database");


// Connection
app.listen(8080, () => {console.log("Sevidor Iniciado")})

// BodyParse
app.use(bodyParse.urlencoded({extended: false}));
app.use(bodyParse.json());


// Linkando a categoria com o index
const cadastroController = require("./database/CadastroController");
// Fazendo o sistema usar as rotas da const indicada | "/" é o prefixo que sera usando antes de qualquer outro da categoria 
app.use("/",cadastroController);


// View engine
app.set('view engine','ejs');

// Static
app.use(express.static('public'));

// Database
connection.authenticate().then(() =>{
        console.log("Banco conectado!");
    }).catch((error) =>{
        console.log(error);
    })

    