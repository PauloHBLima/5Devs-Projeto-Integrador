const {Produto} =   require('../Models')


const homeController = {
    index: async (req, res) => {
        const produtos = await Produto.findAll()
        res.render('home/index', {produtos});
    },

    viewProduto: async (req, res) => {
        const {id} = req.params
        const produtos = await Produto.findById(id)
        return res.render('home/detalhes', {produtos});
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

