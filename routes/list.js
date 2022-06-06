const { creatlist, deletelist, getlist } = require('../controllers/list.controllers');
const { verify } = require('../middleware/verifyToken');

const router = require('express').Router();


router.post('/createList', verify, creatlist)
router.delete('/deletelist', verify, deletelist)
router.get('/get', verify, getlist)


module.exports = router