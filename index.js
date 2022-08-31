const express = require('express');
const app = express();
const methodOverride = require('method-override');
const produtosRouter = require('./routes/produtos')
const adminRoutes = require('./routes/adminRoutes')
const homeRouter = require('./routes/home');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');



//rotas

app.use(adminRoutes);
app.use(produtosRouter);
app.use(homeRouter);


// caso não encontre nenhuma rota
app.use ((req, res, next) => {
    return res.status(404).send({ error:'usuário não encontrado'});
})



app.listen(3001, () => console.log('Rodando...'))