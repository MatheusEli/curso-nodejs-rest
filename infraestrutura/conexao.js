const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'Shipuden1999',
    database: 'agenda-petshop'
})

module.exports = conexao