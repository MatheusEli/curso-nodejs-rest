const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')

conexao.connect(error => {
    if(error){
        console.log(error)
    }else{
        console.log('Conectado com sucesso')
        app = customExpress()
        app.listen('3000', () => console.log('Servidor rodando na porta 3000!'))
    }
})
