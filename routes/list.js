const { creatlist, deletelist, getlist } = require('../controllers/list.controllers');
const { verify } = require('../middleware/verifyToken');

const router = require('express').Router();


router.post('/createList',  creatlist)
router.delete('/deletelist/:id',  deletelist)
router.get('/get', getlist)


module.exports = router