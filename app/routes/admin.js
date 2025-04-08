module.exports= function(app){

app.get('/adm/incluirnoticia', function(req, res){
    res.render("adm/incluir")

});

app.post('/noticias/salvar', function(req, res){
    let noticias =  req.body;
    res.send(noticias)

});

}