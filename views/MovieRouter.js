const express = require('express');
const router = express.Router();
const MovieController = require('../controllers/MovieController');

//middleware
// router.use(express.json());


router.get('/', MovieController.getAll );
router.get('/:id', MovieController.getById );
router.post('/', MovieController.create );
router.put('/:id', MovieController.update );
router.delete('/:id', MovieController.delete );

// router.patch('/:id', (req, res) => {
//     const { id } = req.params;
//     const { title } = req.body;

//     if(!title) return res.state(400).send();

//     const movie = movies.find((movie) => movie.id == id);

//     if(!user) res.status(404).send();

//     user.title = title;

//     return res.send();
// });


module.exports = router;