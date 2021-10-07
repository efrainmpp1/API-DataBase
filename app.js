const express = require('express');

const app = express();

//importando nosso User que foi contruido em models
const User = require('./models/User');

//fazendo a API reconhecer o recive de json
app.use(express.json());

//rotas
app.get('/' , (req,res)=>{
  res.send("Deu certo");
});

//rota simples de receber dados via metodo Post
app.post('/cadastrar' , async (req,res) =>{
  console.log(req.body);
  res.send("Pagina de Cadastro acessada");
});


//Conseguiremos ver nossa API rodando na porta 3000
app.listen(3000);