
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
<<<<<<< HEAD






    viewProduto: (req,res) => {
        const { id } = req.params;
        const Produtos = Produtosmodel.findById(id);
        return res.render('/produtos/detalhes', {produto});
    }
}
=======
>>>>>>> a12aade8e99c18931b5656607fe2188c8a5bdd44

    login: (req,res) => {
        res.render('home/login')    

    },

}

module.exports = homeController;

