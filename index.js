const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const tabelas = require('./infraestrutura/tabelas')

conexao.connect(error => {
    if(error){
        console.log(error)
    }else{
        console.log('Conectado com sucesso')
        tabelas.init(conexao)
        app = customExpress()
        app.listen('3000', () => console.log('Servidor rodando na porta 3000!'))
    }
})
