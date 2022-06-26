const express = require('express');
const app = express();
const produtosRouter = require('./routes/produtos')
const servicosRouter = require('./routes/servicos')
const homeRouter = require('./routes/home');



app.use(express.static('public'));
app.set('view engine', 'ejs');


app.use(produtosRouter);
app.use(servicosRouter);
app.use(homeRouter);






app.listen(3000, () => console.log('Rodando...'))