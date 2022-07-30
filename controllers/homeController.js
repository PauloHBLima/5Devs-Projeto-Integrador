
const homeController = {
    index: (req, res) => {
        res.render('home/index');
    },
    
    faleConosco: (req,res) => {
        res.render('home/contato') 
    },

    login: (req,res) => {
        res.render('home/login')    

    },

}

module.exports = homeController;

