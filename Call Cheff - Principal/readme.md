# Call Cheff
Site criado utilizando Node.js
<hr>
<h3>Bibliotecas Usadas:</h3>

<ul>
<li>Express-session => Gerencia sessões de usuário em aplicativos web| Indicado apenas para pequena escala, pois as sessões ficam na Ram do Servidor.</li>
<li>EJS => Permite incorporar código JavaScript em arquivos HTML.</li>
<li>Body-parser => Ele extrai esses dados recebidos pelo POST e os torna acessíveis no objeto req.body.</li>
<li>Sequelize => Consegue conectar o codigo com o bancos de dados e manipular.</li>
<li>tedious => Necessario para o Sequelize conectar com SQL SERVER.</li>
<li>Slugify => Transforma uma String normal em uma Slug.</li>
<li>Bcryptjs => Armazena senhas de forma segura.</li>
<li>Nodemailer => Permite envio de E-mail com facilidade </li>
<li>Cors => Permite o gerenciamento de urls acessíveis a API.</li>
<li>Buscadorcep => Com o numero do Cep ele traz as informações do endereço</li>
<li>Node-geocoder => Pega o nome da rua,numero,cidade e País e traz a Latitude e Longitude</li>
<li>Geolib => Realiza pesquisas em raio utilizando latitude e longitude</li>
</ul>

<h3>FrameWorks Usados:</h3>

<ul>
<li>Nodemon => Reinicia o servidor sempre que realizar alguma mudança no codigo.</li>
<li>Express => Lidar com Rotas HTTP.</li>
</ul>

<h3>Apis Usadas:</h3>

<ul>
<li>API Distance Matrix => Serviço que aceita uma solicitação HTTPS contendo origens e destinos para um determinado meio de transporte. Para cada combinação de origem e destino, ela retorna a distância e a duração do percurso.</li>
<li>ViaCep => Autocomplet do cadastro com a busca de cep via API</li>
</ul>
