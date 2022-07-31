const { Produto } = require ("../models");

const getAllProdutos = async () => {
    const produtos = await Produto.findAll();
    console.log(produtos);
}

getAllProdutos()
