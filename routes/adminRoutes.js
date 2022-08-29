const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController')



router.get('/admin', adminController.add);
router.post('/admin/create', adminController.create);




// router.get('/admin/login', adminController.showLogin);
// router.post('/admin/login', adminController.Login);
// router.get('/admin/produtos', adminController.index);
// router.get('/admin/produto/cadastro', adminController.create);
// router.post('/admin/produto/cadastro', adminController.store);
// router.get('/admin/produto/editar', adminController.showEdit);
// router.put('/admin/produto/:id', adminController.update);
// router.delete('/admin/produto/:id', adminController.delete);

module.exports = router