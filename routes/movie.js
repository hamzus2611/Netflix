const router = require("express").Router()
const {createMovie, updatemovie, deleteMovie,getAllMovie, getMovie, getMovieRundom} = require("../controllers/movie.controllers")
const { verify } = require('../middleware/verifyToken');


router.post('/register' ,createMovie)
router.put('/update' ,updatemovie)
router.delete('/delete' ,deleteMovie)
router.get('/get/:id', getMovie)
router.get('/' ,getAllMovie)
router.get('/random' ,getMovieRundom)



module.exports= router;