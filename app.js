var app = require('./config/server.js')

const porta = 3000;
app.listen(porta, function (){
    console.log("Servidor Rodando com Express na porta:" + porta)
})