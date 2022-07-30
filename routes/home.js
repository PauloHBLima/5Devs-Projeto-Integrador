const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController')

router.get('/home', homeController.index);
router.get('/home/faleConosco', homeController.faleConosco);
router.get('/home/cadastro', homeController.cadastro);
router.get('/home/login', homeController.login);
router.get('/home/login', homeController.viewProduto);


module.exports =  router;