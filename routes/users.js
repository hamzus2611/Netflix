const express = require('express');
const { verify } = require('../middleware/verifyToken');
const router = express.Router();
const { updateuser, deleteuser, getalluser, getuser, getstat } = require('../controllers/user.controllers');



router.put('/update/:id', updateuser)
router.delete('/delete/:id', deleteuser)
router.get('/getuser/:id', getuser)
router.get('/getallusers/', getalluser)
router.get('/stats', getstat)
router.get("/",getalluser)


module.exports = router;

