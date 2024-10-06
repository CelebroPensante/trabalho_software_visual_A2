var express = require('express');
var router = express.Router();
const auth = require('../auth'); 


const db = require('../models')

const ProductService = require('../services/productService');
const ProductController = require('../controllers/productController');

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
