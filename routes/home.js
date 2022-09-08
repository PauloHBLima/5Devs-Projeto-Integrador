const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController')
const isLogin = require("../middlewares/isLogin")

router.get('/home', isLogin , homeController.index);
router.get('/home/detail/:id', homeController.viewProduto);
router.get('/home/contact', homeController.contact);
router.get('/home/card', homeController.card);
router.get("/admin/listAdm", homeController.listAdm);




module.exports =  router;