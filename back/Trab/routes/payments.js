var express = require('express');
var router = express.Router();
const auth = require('../auth'); // Ensure auth is correctly imported

// Implementar as dependencias para o funcionamento da classe User
const db = require('../models'); // Carregando o banco de dados

// Carregando as classes service e controller da user
const PayService = require('../services/payService');
const PayController = require('../controllers/payController');

// Construir os objetos a partir das classes
const payService = new PayService(db.Payment, db.Cart, db.User); // Include User model
const payController = new PayController(payService);

/* GET payment module status. */
router.get('/', function(req, res, next) {
  res.send('módulo de pagamento rodando.');
});

// Rota para pagamentos por Cartão de Crédito
router.post('/paycreditcard', auth.verifyToken, async (req, res) => {
  console.log('Request body:', req.body); // Debug logging
  payController.payCreditCard(req, res);
});

// Rota para pagamentos por Pix
router.post('/payPix', auth.verifyToken, async (req, res) => {
    console.log('Request body:', req.body); // Debug logging
    payController.payPix(req, res);
  });

// Rota para retornar todos os pagamentos
router.get('/allpayments', auth.verifyToken, async (req, res) => {
  payController.findAllPayments(req, res);
});

module.exports = router;