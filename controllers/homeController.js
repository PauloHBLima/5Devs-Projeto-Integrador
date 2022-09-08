const {Product} =   require('../Models')


const homeController = {
    index: async (req, res) => {
        const products = await Product.findAll()
        res.render('home/index', {products});
    },

    viewProduto: async (req, res) => {
        const {id} = req.params
        const products = await Product.findByPk(id)
        return res.render('home/detail', {products});
    },
    
    listAdm: async (req, res) => {
        const products = await Product.findAll()
        console.log(products)
        res.render('admin/listAdm', {products});
    },

    contact: (req,res) => {
        res.render('home/contact'); 
    },

    card: (req,res) => {
        res.render("home/card")
        
    }

}



module.exports = homeController;

