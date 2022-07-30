
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

    login: (req,res) => {
        res.render('home/login')    

    },

}

module.exports = homeController;

