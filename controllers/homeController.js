const produtos = require('../Models/Produto')


const homeController = {
    index: (req, res) => {
        res.render('home/index', {produtos});
    },

    viewProduto: (req, res) => {
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

