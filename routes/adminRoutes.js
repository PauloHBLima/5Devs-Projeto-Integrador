const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController')
const isLogin = require("../middlewares/isLogin")


router.get('/admin', isLogin , adminController.add);
router.post('/admin/create', adminController.create);
router.get('/admin/oneProduct/:id', adminController.viewProduct);
router.get('/admin/editProduct/:id', adminController.editProduct);
router.put('/admin/update/:id', adminController.update);
router.delete('/admin/editProduct/:id', adminController.delete);

module.exports = router