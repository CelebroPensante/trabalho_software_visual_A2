// ./controllers/cartController.js

class CartController {
    constructor(CartService) {
        this.CartService = CartService;
    }

    async addItem(req, res) {
        const { userid, item } = req.body;
        try {
            const result = await this.CartService.addItem(userid, item);
            res.status(200).json(result);
        } catch (error) {
            console.error('Erro ao adicionar item ao carrinho:', error.message);
            res.status(500).json({ error: 'Erro ao adicionar item ao carrinho' });
        }
    }

    async showCart(req, res) {
        const { userid } = req.query;
        if (!userid) {
            return res.status(400).json({ error: 'userid é obrigatório' });
        }
        try {
            const result = await this.CartService.showCart(userid);
            res.status(200).json(result);
        } catch (error) {
            console.error('Erro ao mostrar itens do carrinho:', error.message);
            res.status(500).json({ error: 'Erro ao mostrar itens do carrinho' });
        }
    }

    // Adicionar um método para deletar um item do carrinho
    async deleteItem(req, res) {
        const { userid, item } = req.body;
        try {
            const result = await this.CartService.deleteItem(userid, item);
            res.status(200).json(result);
        } catch (error) {
            console.error('Erro ao deletar item do carrinho:', error.message);
            res.status(500).json({ error: 'Erro ao deletar item do carrinho' });
        }
    }

}

module.exports = CartController;