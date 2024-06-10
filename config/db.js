// Importe a biblioteca necessária
const mysql = require('mysql');

// Crie uma conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'db', // Nome do serviço no docker-compose.yml
  user: 'seucurriculo',
  password: 'seucurriculo@2024',
  database: 'seucurriculo-db'
});

// Conecte-se ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados MySQL');
});

module.exports = connection;
