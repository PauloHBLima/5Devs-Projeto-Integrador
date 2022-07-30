
const produtoController = {


showOneProduct: (req,res) => {
    const { id } = req.params;
 res.render('adm/produtos/detalhes')
}
}
module.exports = produtoController;