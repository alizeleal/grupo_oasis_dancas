let dbConnection = require("../../config/dbConnection");

module.exports = function (app) {
  let connection = dbConnection();
  app.get("/noticias", function (req, res) {
    connection.query("select * from noticias", function (err, result) {
      res.render("noticias/noticias", { noticias: result });
    });
  });

  app.get("/noticias/incluir", function (req, res) {
    res.render("noticias/incluir");
  });
};
