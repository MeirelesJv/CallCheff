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

router.post("/users/create",(req,res) =>{
    var {email, password} = req.body;
       
    //Primeiro verificamos se o email já é cadastrado
    users.findOne({where:{Email: email}}).then( user => {
        if(user == undefined){
            var salt = bcrypt.genSaltSync(10);
            var hash = bcrypt.hashSync(password, salt);
            users.create({
                Email: email,
                Password: hash
            }).then(() => {
                enviarEmail.sendMail({
                    from: "Joao Vitor <meirelesDev@hotmail.com>",
                    to: email,
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