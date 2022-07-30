
const homeController = {
    index: (req, res) => {
        res.render('home/index');
    },
    
    faleConosco: (req,res) => {
        res.render('home/contato'); 
    },

    cadastro: (req,res) => {
        res.render('home/cadastro');
    },

    viewProduto: (req,res) => {
        const { id } = req.params;
        const Produtos = Produtosmodel.findById(id);
        return res.render('/produtos/detalhes', {produto});
    },

    login: (req,res) => {
        res.render('home/login')    

    }

}

module.exports = homeController;

