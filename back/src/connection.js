// Basicamente aqui vai ser a integração ao banco de dados .

const mysql = require('mysql2/promise')

// Aqui a Conexão , vai criar a conexão por conta do ' Create POOL'
const connection = mysql.createPool({
    host: 'localhost', // Servidor 
    port: 3306, // aqui é a porta padrão 
    user: 'root', // nome do usuário
    password: 'root', // Senha 
    database: 'teste_node', // Nome do banco de dados que vai ser usado .
})

module.exports = connection
// O final da conexão.
//  Exporta a pool de conexões para que ela possa ser utilizada em outros arquivos do projeto.