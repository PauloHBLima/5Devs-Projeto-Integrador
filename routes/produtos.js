const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController')



router.get('/produtos', produtoController.index);
router.get('/produtos/:id', produtoController.show);
router.post('/produtos', produtoController.create);
router.put('/produtos/:id', produtoController.update);
router.delete('/produtos/:id', produtoController.destroy);




module.exports = router;



