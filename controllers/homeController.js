
const homeController = {
    index: (req, res) => {
        res.render('home/index');
    },
    
    faleConosco: (req,res) => {
        res.render('home/contato'); 
    },

    cadastro: (req,res) => {
        res.render('home/cadastro');
    }
}


module.exports = homeController;

