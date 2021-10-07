const sequelize = require('sequelize');

const connection = new sequelize('testes', 'root', 'pmefrain2', {
  host: 'localhost',
  dialect: 'mysql'
});

//Verificando se a conexão foi feita com sucesso
connection.authenticate()
.then(function(){
  console.log("Deu tudo certo na conexão com o Banco de Dados");
}).catch(function(){
  console.log("Erro a Conexão não pode ser realizada");
});

module.exports = connection;