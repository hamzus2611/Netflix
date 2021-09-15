const router = require("express").Router()
const {createMovie, updatemovie, deleteMovie,getAllMovie, getMovie, getMovieRundom} = require("../controllers/movie.controllers")
const { verify } = require('../middleware/verifyToken');


router.post('/register', verify ,createMovie)
router.put('/update', verify ,updatemovie)
router.delete('/delete', verify ,deleteMovie)
router.get('/get/:id', verify ,getMovie)
router.get('/', verify ,getAllMovie)
router.get('/random', verify ,getMovieRundom)



module.exports= router;