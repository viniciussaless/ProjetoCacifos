const mysql = require('mysql');

// Configuração da conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'projetocacifo'
});

module.exports = connection;
