const express = require('express');
const { verify } = require('../middleware/verifyToken');
const router = express.Router();
const { updateuser, deleteuser, getalluser, getuser, getstat } = require('../controllers/user.controllers');



router.put('/update/:id',verify, updateuser)
router.delete('/delete/:id',verify, deleteuser)
router.get('/getuser/:id',verify, getuser)
router.get('/getallusers/',verify, getalluser)
router.get('/stats/',verify, getstat)


module.exports = router;

