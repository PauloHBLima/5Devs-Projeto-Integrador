
const produtoController = {

index: (req,res) => res.send('Lista de produtos'),
create: (req,res) => res.send('Cadastro do produto'),
show:  (req,res) => res.send('Detalhes do produto: ' + req.params.id),
update:  (req,res) => res.send('Atualização do produto: ' + req.params.id),
destroy: (req,res) => res.send('Exclusão do produto: ' + req.params.id)
}



module.exports = produtoController;