const MovieModel = require('../models/MovieModel');

const MovieController = {};

MovieController.getAll = (req, res) => {
    res.json(MovieModel.findAll());
};

MovieController.getById = (req, res) => {
    const  { id } = req.params;
    res.json(MovieModel.findBy(id));
};

MovieController.create = (req, res) => {
    const  {id, title} = req.body;
    const movie = {id, title};
    movies.push(movie);
    res.json(movie);
};

MovieController.update = (req, res) => {
    const  { id } = req.params;
    const { body } = req;
    res.json(MovieModel.update({id, ...body}));
};

MovieController.delete = (req, res) => {
    const  { id } = req.params;
    res.json(MovieModel.delete(id));
};

module.exports = MovieController;