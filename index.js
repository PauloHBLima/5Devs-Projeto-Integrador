const express = require('express');
const app = express();
const methodOverride = require('method-override');
const produtosRouter = require('./routes/produtos')
const adminRoutes = require('./routes/adminRoutes')
const homeRouter = require('./routes/home');


app.use(methodOverride('_method'));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.json());



//rotas

app.use(produtosRouter);
app.use(adminRoutes);
app.use(homeRouter);


// caso não encontre nenhuma rota
/*app.use ((req, res, next) => {
//    return res.status(404).render('not-found', { error:'usuário não encontrado'});
})*/



app.listen(3000, () => console.log('Rodando...'))