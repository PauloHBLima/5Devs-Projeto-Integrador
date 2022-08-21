const {Product} =   require('../Models')


const homeController = {
    index: async (req, res) => {
        const products = await Product.findAll()
        res.render('home/index', {products});
    },

    viewProduto: async (req, res) => {
        const {id} = req.params
        const products = await Product.findByPk(id)
        return res.render('home/detalhes', {products});
    },
    
    faleConosco: (req,res) => {
        res.render('home/contato'); 
    },

    cadastro: (req,res) => {
        res.render('home/cadastro');
    },

       login: (req,res) => {
        res.render('home/login')    

    }

}



module.exports = homeController;

