// ./routes/carts.js
var express = require('express');
var router = express.Router();
const auth = require('../auth');

const db = require('../models');

const CartService = require('../services/cartService');
const CartController = require('../controllers/cartController');

const cartService = new CartService(db.Cart, db.Product);
const cartController = new CartController(cartService);

/* GET carts listing. */
router.get('/', function(req, res, next) {
  res.send('módulo de carts rodando.');
});

// Add item para o cSarrinho
router.post('/addItem', async (req, res) => {
  cartController.addItem(req, res);
});

// Mostrar os itens do carrinho de cada usuario
router.get('/showCart', async (req, res) => {
  cartController.showCart(req, res);
});

// exclui um item do carrinho
router.delete('/deleteItem', async (req, res) => {
  cartController.deleteItem(req, res);
});


module.exports = router;