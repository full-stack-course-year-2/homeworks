const express = require('express');
const router = express.Router();
const auth =require('../middlewares/middle')
const {register, login, find,findAll,romeve}= require('../services/userServis');




router.post('/register',register)
router.post('/login',login )
router.get('/:id', find)
router.get('/',auth, findAll)
router.delete('/:id', romeve)





module.exports = router;