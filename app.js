var app = require('./config/server.js')

var home = require('./app/routes/home.js')
home(app)

var aulas = require('./app/routes/aulas.js')
aulas(app)

var noticias = require('./app/routes/noticias.js')
noticias(app)

var spa = require('./app/routes/spa.js')
spa(app)







const porta = 3000;
app.listen(porta, function (){
    console.log("Servidor Rodando com Express na porta:" + porta)
})