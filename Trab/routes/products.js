// ./routes/products.js
var express = require('express');
var router = express.Router();
const auth = require('../auth'); // Carregar os objetos do auth.js

// Implementar as dependencias para o funcionamento da classe User
const db = require('../models') // Carregando o bando de dados

// Carregando as clases service e controller da user
const ProductService = require('../services/productService');
const ProductController = require('../controllers/productController');

// Contruir os objetos a partir das classes
const productService = new ProductService(db.Product);
const productController = new ProductController(productService);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('módulo de produtos rodando.');
});

// Rota criação de um novo produto
router.post('/newProduct', async(req,res)=>{
  productController.createProduct(req,res);
});

// Rota para listar todos os produtos
router.get('/getAllProducts', async (req, res) => {
  productController.findAllProducts(req, res);
});

// Rota para atualizar um produto existente
router.put('/updateProduct', async (req, res) => {
  productController.updateProduct(req, res);
});

// Rota para deletar um produto
router.delete('/deleteProduct', async(req,res)=>{
  productController.deleteProduct(req,res);
});

module.exports = router;
