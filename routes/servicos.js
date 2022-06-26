const express = require('express');
const router = express.Router();



router.get('/servicos', (req,res) => res.send('Lista de servicos'));
router.get('/servicos/:id', (req,res) => res.send('Detalhes do servico: ' + req.params.id));
router.post('/servicos/:id', (req,res) => res.send('Cadastro do servico'));
router.put('/servicos/:id', (req,res) => res.send('Atualização do servico: ' + req.params.id));
router.delete('/servicos/:id', (req,res) => res.send('Detalhes do servico: ' + req.params.id));


module.exports = router;