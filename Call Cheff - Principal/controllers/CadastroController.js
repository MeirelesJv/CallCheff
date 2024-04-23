const express = require("express");
const router = express.Router();
const users = require("../database/Users");
const usersChef = require("../database/usersChef");
const chefCuisines = require("../database/chefsCuisines");
const cuisines = require("../database/cuisines");
const bcrypt = require('bcryptjs');
const enviarEmail = require('../email');
const loginAuth = require('../middleware/loginAuth');

router.get("/cadastro",(req,res) =>{
    res.render("cadastro");
})

router.get("/",(req,res) => {
    res.render("login");
})

router.post("/users/create/dados",async (req,res) =>{
    let { email, password, name, lastname, cpf, birthday, cep, rua, numberhouse, house, reference, bairro, cidade, uf, tel,} = req.body

    //Verifica que se nao tiver nada em Reference, ele coloque com null. Já instalado no Front-End
    // if (reference.trim() === '') {
    //     reference = null;
    // }

    try {
        //Verificação de Email
        let existingEmail = await users.findOne({ where: {Email: email}});
        if (existingEmail == undefined) {
            //Verificação de CPF
            let existingCpf = await users.findOne({where: {Cpf: cpf}});
            if (existingCpf == undefined) {
                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(password, salt);

                await users.create({
                    Email: email,
                    Password: hash,
                    Name: name,
                    LastName: lastname,
                    Cpf: cpf,
                    Birthday: birthday,
                    Cep: cep,
                    Rua: rua,
                    NumberHouse: numberhouse,
                    House: house,
                    Reference: reference,
                    Bairro: bairro,
                    Cidade: cidade,
                    Uf: uf,
                    Tel: tel
                });
                
                enviarEmail.sendMail({
                    from: "Joao Vitor <meirelesDev@hotmail.com>",
                    to: email,
                    subject: "Cadastro CallCheff",
                    text: "Obrigado pelo cadastro seu otario",
                });

                res.redirect('/'); //Sucesso
            }else{
             res.redirect("/") //Cpf ja cadastrado
             console.log("Já existe o CPF")
            }
        }else{
            res.redirect("/"); //Email ja cadastrado
            console.log("Já existe o Email")
        }
    }catch(error){
        console.error("Erro:", error);
        res.status(500).send("Erro interno do servidor");
    }
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
                //res.json(req.session.user);
                res.redirect("/home")
            }else{
                res.redirect("/");
            }
        }else{
            res.redirect("/")
        }
    })
});

router.get("/logout",(req,res) =>{
    req.session.user = undefined;
    res.redirect("/");
});

router.post("/cadastro/Chefs",(req,res) => {
    req.render("cadastroChef")
});

router.post("/chefs/create/dados",async (req,res) =>{
    let { email, password, name, lastname, cnpj, cep, rua, numberhouse, bairro, cidade, uf, tel,} = req.body

    try{
        let existingEmailChef = await usersChef.findOne({ where: {Email: email}});
        if(existingEmailChef == undefined){
            let existingEmail = await users.findOne({ where: {Email: email}});
            if (existingEmail == undefined) {
                //Verificação de CPF
                let existingCnpj = await usersChef.findOne({where: {Cnpj: cnpj}});
                if (existingCnpj == undefined) {
                    const salt = bcrypt.genSaltSync(10);
                    const hash = bcrypt.hashSync(password, salt);
    
                    await usersChef.create({
                        Email: email,
                        Password: hash,
                        Name: name,
                        LastName: lastname,
                        Cnpj: cnpj,
                        Cep: cep,
                        Rua: rua,
                        NumberHouse: numberhouse,
                        Bairro: bairro,
                        Cidade: cidade,
                        Uf: uf,
                        Tel: tel
                    });
                    
                    enviarEmail.sendMail({
                        from: "Joao Vitor <meirelesDev@hotmail.com>",
                        to: email,
                        subject: "Cadastro como Cheff em CallCheff",
                        text: "Obrigado pelo cadastro seu otario",
                    });
    
                    res.redirect('/'); //Sucesso
                }else{
                 res.redirect("/") //Cpf ja cadastrado
                 console.log("Já existe o CPF")
                }
            }else{
                res.redirect("/"); //Email ja cadastrado
                console.log("Já existe o Email")
            }
        }else{
            res.redirect("/")
            console.log("Email já cadastrado")
        }
        
    }catch(error){
        console.error("Erro:", error);
        res.status(500).send("Erro interno do servidor");
    }
});

module.exports = router;