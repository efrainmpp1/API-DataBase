const sequelize = require('sequelize');

//importando nosso db para trabalhar nosso model
const db = require('./database');

const User = db.define('users' , {
  id:{
    type: sequelize.INTEGER,
    autoIncrement: true,
    allowNull : false,
    primaryKey: true
  },
  name:{
    type: sequelize.STRING,
    allowNull:false,
  },
  email:{
    type:sequelize.STRING,
    allowNull:false
  }
})

//Realizar alteração da tabela ja esxistente
User.sync()

module.exports = User;