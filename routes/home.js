const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController')


router.get('/home', homeController.index);
router.get('/home/detail/:id', homeController.viewProduto);
router.get('/home/contact', homeController.contact);
router.get('/home/register', homeController.register);
router.get('/home/login', homeController.login);
router.get('/home/card', homeController.card);
router.get("/admin/listAdm", homeController.listAdm);




module.exports =  router;