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
    var email = req.body.email;
    var password = req.body.password;

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
    let name = req.body.name;
    let lastname = req.body.lastname;
    let cpf = req.body.cpf;
    let birthday = req.body.birthday;
    let cep = req.body.cep;
    let numberhouse = req.body.numberhouse;
    let house = req.body.house;
    let reference = req.body.reference == ''?null : req.body.reference;
    let tel = req.body.tel;
    let addres = req.body.addres;

    //Primeiro verificamos se o email já é cadastrado
    users.findOne({where:{Cpf: cpf}}).then( user => {
        if(user == undefined){
            var salt = bcrypt.genSaltSync(10);
            var hash = bcrypt.hashSync(req.session.password, salt);
            users.create({
                Name: name,
                LastName: lastname,
                Email: req.session.email,
                Password: hash,
                Cpf: cpf,
                Birthday: birthday,
                Cep: cep,
                NumberHouse: numberhouse,
                House: house,  
                Reference: reference,
                Tel: tel,
                Addres: addres,
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
    var email = req.body.email;
    var password = req.body.password;
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