const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController')




router.get('adm/produtos/:id', produtoController.showOneProduct);





module.exports = router;



