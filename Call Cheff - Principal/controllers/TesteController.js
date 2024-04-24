const express = require("express");
const router = express.Router();
const loginAuth = require('../middleware/loginAuth');
const NodeGeocoder = require('node-geocoder');
const buscadorcep = require('buscadorcep');

router.get("/home",(req,res) =>{
    res.render("chefs")
});

router.post("/home/cep",(req,res) => {
    let {cep, } = req.body;
    console.log(cep)

    async function getEndereco(cep) {
      const endereco = await buscadorcep(cep)
      .then(response => response)
      .then(endereco => endereco);
      return endereco;
    }

    // Example usage
    getEndereco(cep).then(endereco => {
      let numero = req.body.numero;
      const options = {
        provider: 'openstreetmap' // provedor do serviço de geocodificação
      };
      const geocoder = NodeGeocoder(options);
      // Endereço que deseja converter
      const address = `${endereco.logradouro},`+ numero +`,${endereco.localidade},Brasil`;
      geocoder.geocode(address).then( (response) => {
        const [location] = response;  // Pegando o primeiro resultado
        console.log(location.latitude, location.longitude);
      }).catch( (error) => {
          console.error(error);
      });
    }).catch(error => console.error(error));
});

module.exports = router;