const Author = require("../models/author.model");

module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then(allDaAuthors => res.json(allDaAuthors))
        .catch(err => res.json({ message: "Something went wrong",  err }));
};

module.exports.findOneSingleAuthor = (req, res) => {
    Author.findOne({ _id: req.params._id })
        .then(oneSingleAuthor => res.json({ author: oneSingleAuthor }))
        .catch(err => res.json({ message: "Something went wrong",  err }));
};

module.exports.createNewAuthor = (req, res) => {
    Author.create(req.body)
        .then(newlyCreatedAuthor => res.json({ author: newlyCreatedAuthor }))
        .catch(err => res.status(400).json({ message: "Something went wrong",  err }));
};

module.exports.updateExistingAuthor = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params._id }, req.body,  {runValidators:true})
        .then(updatedAuthor => res.json({ author: updatedAuthor }))
        .catch(err => res.status(400).json({ message: "Something went wrong", err }));
};

module.exports.deleteAnExistingAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params._id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong",  err }));
};
