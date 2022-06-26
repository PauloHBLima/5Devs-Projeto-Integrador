
const homeController = {
    index: (req, res) => {
        res.render('home/index');
    },
    faleConosco: (req,res) => {
        res.render('home/contato') 
    }
}

module.exports = homeController;

