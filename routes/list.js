const { creatlist, deletelist } = require('../controllers/list.controllers');
const { verify } = require('../middleware/verifyToken');

const router = require('express').Router();


router.post('/createList', verify, creatlist)
router.post('/deletelist', verify, deletelist)

module.exports = router