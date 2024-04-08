//Chamando a biblioteca
const nodemailer = require('nodemailer');

//Realizando a configuração do email do emitente | Host e Port muda baseado no tipo do email gmail,outlook,etc...
let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: {
        user: "meirelesdev@hotmail.com",
        pass: "j0@0v1t0r"
    }
});

module.exports = transporter;