module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Servidor rodando, tudo Ok! Fiz uma alteração(testando nodemon)'))

    app.post('/atendimentos', (req, res) => {
        console.log(req.body)
        res.send('Você esta realizando uma requisição POST')
    })
}