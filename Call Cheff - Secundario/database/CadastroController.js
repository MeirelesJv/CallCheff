const express = require("express");
const router = express.Router();
const users = require("./Users");
const bcrypt = require('bcryptjs');
const enviarEmail = require('../email')

router.get("/",(req,res) =>{
    res.render("cadastro");
})

router.post("/users/create",(req,res) =>{
    var email = req.body.email;
    var password = req.body.password;
    var name = req.body.name;

    // Verifica se name está vazio e define como null se for o caso
    if (name.trim() === '') {
        name = null;
    }
                            
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    
    users.create({
        Email: email,
        Password: hash,
        Name: name
    }).then(() => {
        res.redirect('/')
    }).catch((err) => {
        res.redirect('/cadastro')
    });
});


module.exports = router;