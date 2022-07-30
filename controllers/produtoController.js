
const produtoController = {


showOneProduct: (req,res) => {
    const { id } = req.params;
 res.render('produtos/detalhes')
}
}
module.exports = produtoController;