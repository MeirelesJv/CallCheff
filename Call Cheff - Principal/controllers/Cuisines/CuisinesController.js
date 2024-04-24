const express = require("express");
const router = express.Router();
const cuisines = require("../../database/cuisines");

//Cuisines
router.get("/cadastrar/cuisines",(req,res) =>{
    res.render("cuisines")
});

//Cuisines
router.post("/cadastrar/cuisines/dados",async (req,res) =>{
    let {name, origin, img,} = req.body

    try{
        let  verificarName = await cuisines.findOne({where: {Name: name}});
        if(verificarName == undefined){
            await cuisines.create({
                Name: name,
                Origin: origin,
                Img: img
            });
            console.log("Cadastrado!");
            console.redirect("/")
        }else{
            console.log("Nome já cadastrado");
            res.redirect("/");
        }
    }catch{
        res.redirect("/");
    }
});

module.exports = router;