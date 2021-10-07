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
  //cadastrar usuario na tabela users do banco de dados
  await User.create(req.body)
  .then(function(){
    return res.json({
      mensagem:"Usuario Cadastrado com Sucesso"
    })
  }).catch(function(){
    return res.status(400).json({
      mensagem:"Erro Usuario n pode ser cadastrado"
    })
  })
});


//Conseguiremos ver nossa API rodando na porta 3000
app.listen(3000);