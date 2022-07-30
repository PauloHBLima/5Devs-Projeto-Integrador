
const produtos =  [{
    id: 1,
    nome:"Carro",
    descricao: "Volvo 60",
    preco: 80000.00,
    ativo:false

} 

]

const homeController = {
    index: (req, res) => {
        res.render('home/index', {produtos});
    },

    viewProduto: (req, res) => {
        res.render('produto/detalhes', {produtos});
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

