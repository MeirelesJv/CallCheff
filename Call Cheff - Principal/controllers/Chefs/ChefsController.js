const express = require("express");
const router = express.Router();
const users = require("../../database/Users");
const usersChef = require("../../database/usersChef");
const chefCuisines = require("../../database/chefsCuisines");
const cuisines = require("../../database/cuisines");
const bcrypt = require('bcryptjs');
const enviarEmail = require('../../email');
const NodeGeocoder = require('node-geocoder');


//Chefs
router.get("/cadastro/Chefs",(req,res) => {
    res.render("cadastroChef")
});

//Chefs
router.post("/chefs/create/dados",async (req,res) =>{
    let { email, password, name, lastname, cnpj, cep, rua, numberhouse, bairro, cidade, uf, tel,} = req.body

     
        // let numero = numberhouse;
        // let logradouro = rua;
        // let localidade = cidade;
        
      

    try{
        const options = {
            provider: 'openstreetmap' // provedor do serviço de geocodificação
          };
          const geocoder = NodeGeocoder(options);
          // Endereço que deseja converter
          const address = `${rua},`+ numberhouse +`,${cidade},Brasil`;
          await geocoder.geocode(address).then( (response) => {
            const [location] = response;  // Pegando o primeiro resultado
            console.log(location.latitude, location.longitude);
            req.session.latitude = location.latitude;
            req.session.longitude = location.longitude;
          }).catch( (error) => {
              console.error(error);
          });

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
                        Tel: tel,
                        Longitude: req.session.longitude,
                        Latitude: req.session.latitude,
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

//Cuisines-Chefs
router.get("/cadastrar/cuisines-chefs",(req, res) => {
    usersChef.findAll().then(usersChef =>{
        cuisines.findAll().then(cuisines => {
            res.render("cuisines-chefs", {usersChef: usersChef, cuisines: cuisines})
        }).catch(erro => {
            res.redirect("/");
        })
    }).catch(erro => {
        res.redirect("/");
    })
});

//Cuisines-Chefs
router.post("/cadastrar/cuisines-chefs/update",async (req,res) => {
    let { usersChef, cuisines, nivel} = req.body;

    try{
        let verificarCuisinesChef = await chefCuisines.findOne({where: {chefId: usersChef, cuisinesId: cuisines}});

        if(verificarCuisinesChef == undefined){
            await chefCuisines.create({
                chefId: usersChef,
                cuisinesId: cuisines,
                Nivel: nivel,
            });
            console.log("Foi")
            res.redirect("/cadastrar/cuisines-chefs")
        }else{
            console.log("Já cadastrado amigo")
            res.redirect("/")
        }
    }catch{
        console.log("Erro ao cadastrar");
    }
});

module.exports = router;