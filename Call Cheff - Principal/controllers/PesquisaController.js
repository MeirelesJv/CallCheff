const express = require("express");
const router = express.Router();
const NodeGeocoder = require('node-geocoder');
const buscadorcep = require('buscadorcep');
const Geolib = require('geolib');
const session = require("express-session");
const chefs = require("../database/usersChef")

router.post("/home/cep",(req,res) => {
    let {cep, } = req.body;

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
        req.session.latitude = location.latitude;
        req.session.longitude = location.longitude;
        res.redirect("/home/pesquisa");
      }).catch( (error) => {
          console.error(error);
      });
    }).catch(error => console.error(error));
});


router.get("/home/pesquisa",async(req,res) =>{
  const clienteLocalizacao = { latitude: req.session.latitude, longitude: req.session.longitude }; // Localização do cliente

  try{
    const chefsData = await chefs.findAll({raw: false});
    const lojasNoRaioDe10km = [];
    const processedChefs =  chefsData.map(async chef => {
      const lojaLocalizacao = { latitude: chef.Latitude, longitude: chef.Longitude };
      const distanciaLoja =  Geolib.getDistance(clienteLocalizacao, lojaLocalizacao);
      
      if (distanciaLoja <= 10000) {
        lojasNoRaioDe10km.push({ nome: chef.Name, distancia: distanciaLoja });
      }else{
        console.log("erro")
      }
      console.log('Lojas no raio de 10 km do cliente:', lojasNoRaioDe10km);
      
    });
    res.render("lojas",{lojasNoRaioDe10km: lojasNoRaioDe10km});
  }catch{
    console.log("Erro")
  }
});



module.exports = router;