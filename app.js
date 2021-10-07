const express = require('express');

const app = express();

const db = require('./models/database');

app.get('/' , (req,res)=>{
  res.send("Deu certo");
});

//Conseguiremos ver nossa API rodando na porta 3000
app.listen(3000);