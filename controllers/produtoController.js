const {Product} = require('../Models')


const produtoController = {
    index: async (req, res) => {
        const products = await Product.findAll()
        res.render('admin/index', {products});
    },
}
module.exports = produtoController;