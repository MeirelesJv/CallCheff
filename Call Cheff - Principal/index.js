const express = require("express");
const app = express();
const bodyParse = require("body-parser");
const connection = require("./database/database");
const session = require("express-session");

// Connection
app.listen(8080, () => {console.log("Sevidor Iniciado")})

// BodyParse
app.use(bodyParse.urlencoded({extended: false}));
app.use(bodyParse.json());

//Sessão
// app.use(session({
//     secret: "falabaixonege", cookie:{maxAge: 30000}
// }))

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
    

const cors = require("cors")
app.use(cors())