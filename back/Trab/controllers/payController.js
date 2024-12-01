// ./controllers/payController.js

class PayController {
    constructor(PayService) {
        this.payService = PayService;
    }

    // Método para pagamento por cartão de crédito
    async payCreditCard(req, res) {
        const { user_id, status } = req.body;
        try {
            const result = await this.payService.payCreditCard(user_id, status);
            res.status(200).json(result);
        } catch (error) {
            console.error('Erro ao processar pagamento:', error.message);
            res.status(500).json({ error: 'Erro ao processar pagamento' });
        }
    }

    // Método para pagamento por Pix
    async payPix(req, res) {
        const { user_id, status } = req.body;
        try {
            const result = await this.payService.payPix(user_id, status); 
        } catch (error) {
            console.error('Erro ao processar pagamento:', error.message);
            res.status(500).json({ error: 'Erro ao processar pagamento' });
        }
    }

    // Método para retornar todos os pagamentos
    async findAllPayments(req, res) {
        try {
            const result = await this.payService.findAllPayments();
            res.status(200).json(result);
        } catch (error) {
            console.error('Erro ao buscar pagamentos:', error.message);
            res.status(500).json({ error: 'Erro ao buscar pagamentos' });
        }
    }
}

module.exports = PayController;