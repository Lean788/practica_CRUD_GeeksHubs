let db = require('../db');

MovieModel = {};

MovieModel.findAll = () => db;

MovieModel.findBy = (id) => db.find(movie => movie.id == id);
MovieModel.update = (newMovie) => {
    let movies = db.filter(movie => movie.id != newMovie.id);
    movies.push(newMovie);
    db = movies;
    return newMovie; 
};
MovieModel.delete = (id) => {
    let movies = db.filter(movie => movie.id != id);
    db = movies;
    return 'OK';
}; 

module.exports = MovieModel;