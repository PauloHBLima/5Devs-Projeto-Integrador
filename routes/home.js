const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController')

router.get('/home', homeController.index);
router.get('/home/faleConosco', homeController.faleConosco);



module.exports =  router;