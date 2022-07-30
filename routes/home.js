const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController')

router.get('/home', homeController.index);
router.get('/home/faleConosco', homeController.faleConosco);
router.get('/home/login', homeController.login);



module.exports =  router;