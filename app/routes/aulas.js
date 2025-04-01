module.exports= function(app){

app.get('/ventre', function(req, res){
    res.render("aulas/ventre")

})

app.get('/cigana', function(req, res){
    res.render("aulas/cigana")

})
}