const fs = require('fs')

fs.readFile('./assets/chow-chow.jpg', (erro, buffer) => {
    if(erro){
        console.log(erro)
    }else{
        console.log('A imagem foi bufferizada!')
        console.log(buffer)

        fs.writeFile('./assets/chow-chow2.jpg', buffer, (erro, buffer) => {
            if(erro){
                console.log(erro)
            }else{
                console.log("Imagem 2 escrita com sucesso!")
            }
        })
    }
})