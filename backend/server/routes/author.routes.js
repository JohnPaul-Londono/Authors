const AuthorController = require("../controllers/author.controller");


module.exports = app => {
    app.get("/api/authors", AuthorController.findAllAuthors);
    app.get("/api/authors/one/:_id", AuthorController.findOneSingleAuthor);
    app.put("/api/authors/update/:_id", AuthorController.updateExistingAuthor);
    app.post("/api/authors/new", AuthorController.createNewAuthor);
    app.delete("/api/authors/delete/:_id", AuthorController.deleteAnExistingAuthor);
};