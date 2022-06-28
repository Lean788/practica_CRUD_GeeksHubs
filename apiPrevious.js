const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(express.json());

let movies = [
    {"id": "1", "title": "Soy Leyenda"},
    {"id": "2", "title": "El Risas"},
    {"id": "3", "title": "Yo, Robot"},
    {"id": "4", "title": "El Hoyo"}
];

app.get('/', (req, res) => {
    res.send('EXPRESS2')
});

app.get('/movies', (req, res) => {
    res.send(movies);
});

app.get('/movies/:id', (req, res) => {
    const  { id } = req.params;
    let movie = movies.find((movie) => movie.id == id);
    res.json(movie);
});

app.post('/movies', (req, res) => {
    const  {id, title} = req.body;
    const movie = {id, title};
    movies.push(movie);
    res.json(movie);
});

app.put('/movies/:id', (req, res) => {
    const  { id } = req.params;
    const { title } = req.body;
    let movieList = movies.filter(movie => movie.id !== id);
    let movie = {id, title};
    movieList.push(movie);
    movies = movieList;
    res.json(movie);
});

app.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    if(!title) return res.state(400).send();

    const movie = movies.find((movie) => movie.id == id);

    if(!user) res.status(404).send();

    user.title = title;

    return res.send();
});

app.delete('/movies/:id', (req, res) => {
    const  { id } = req.params;
    let movieList = movies.filter((movie) => movie.id != id);
    movies = movieList;
    res.json('OK');
});


app.listen(PORT, () => console.log('The server is listening on port'));