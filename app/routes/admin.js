module.exports = function (app) {
  app.get("/adm/incluirnoticia", function (req, res) {
    res.render("adm/incluir");
  });

  app.post("/noticias/salvar", function (req, res) {
    let noticia = req.body;

    let connection = app.config.dbConnection();

    let noticiasModel = app.app.models.noticiasModel;

    noticiasModel.saveNoticia(noticia,connection, function (err, result) {
      res.redirect("/noticias");
    });
  });
};
