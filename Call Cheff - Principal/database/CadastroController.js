const express = require("express");
const router = express.Router();
const users = require("./Users");
const bcrypt = require('bcryptjs');
const enviarEmail = require('../email')
const session = require("express-session");

router.get("/cadastro",(req,res) =>{
    res.render("cadastro");
})

router.get("/",(req,res) => {
    res.render("login");
})

router.get("/cadastro/dados",(req,res) =>{
    res.render("cadastroCont");
})

router.post("/users/create/email",(req,res) => {
    let {email, password} = req.body;

    users.findOne({where: {Email: email}}).then( emails => {
        if(emails == undefined){
            req.session.email = email;
            req.session.password = password;
            res.redirect("/cadastro/dados")
        }else{
            res.redirect("/")
        }
    })
})

router.post("/users/create/dados",(req,res) =>{
    let dados = {
    name: req.body.name,
    lastname: req.body.lastname,
    cpf: req.body.cpf,
    birthday: req.body.birthday,
    cep: req.body.cep,
    numberhouse: req.body.numberhouse,
    house: req.body.house,
    reference: req.body.reference == ''?null : req.body.reference,
    tel: req.body.tel,
    addres: req.body.addres
    }

    //Primeiro verificamos se o email já é cadastrado
    users.findOne({where:{Cpf: dados.cpf}}).then( user => {
        if(user == undefined){
            var salt = bcrypt.genSaltSync(10);
            var hash = bcrypt.hashSync(req.session.password, salt);
            users.create({
                Email: req.session.email,
                Password: hash,
                Name: dados.name,
                LastName: dados.lastname,
                Cpf: dados.cpf,
                Birthday: dados.birthday,
                Cep: dados.cep,
                NumberHouse: dados.numberhouse,
                House: dados.house,  
                Reference: dados.reference,
                Tel: dados.tel,
                Addres: dados.addres,
            }).then(() => {
                enviarEmail.sendMail({
                    from: "Joao Vitor <meirelesDev@hotmail.com>",
                    to: req.session.email,
                    subject: "Cadastro CallCheff",
                    text:"Obrigado pelo cadastro seu otario",
                });
                res.redirect('/')
            }).catch((err) => {
                res.redirect('/cadastro')
            }); 
        }else{
            res.redirect("/")
        }
    })
})

router.post("/users/login", (req,res) =>{
    let {email, password} = req.body;
    
    users.findOne({where:{Email: email}}).then( user => {
        if(user != undefined){
            var correct = bcrypt.compareSync(password, user.Password);
            if(correct){
                req.session.user = {
                    id: user.id,
                    email: user.Email
                }
                res.json(req.session.user);
            }else{
                res.redirect("/");
            }
        }else{
            res.redirect("/")
        }
    })
});

module.exports = router;