module.exports = function(){
    this.getNoticias = function(connection, callback){
        connection.query("select * from noticias",callback);
    }

    this.getNoticia = function(connection, callback){
        connection.query("select * from noticias where id_noticia=2",callback);
    }

    this.saveNoticia = function(noticia, connection, callback) {
        connection.query("insert into noticias set ?", noticia, callback)
    }
    return this;
}