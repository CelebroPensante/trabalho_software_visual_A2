// ./services/payService.js

class PayService {
    constructor(PayModel, CartModel, UserModel) {
        this.Payment = PayModel;
        this.Cart = CartModel;
        this.User = UserModel;
    }

    // Metodo para pagamento por cartão de crédito
    async payCreditCard(email, status) {
        try {
            const user = await this.User.findOne({
                where: {
                    email: email
                }
            });

            if (!user) {
                throw new Error('Usuário não encontrado');
            }

            const cart = await this.Cart.findOne({
                where: {
                    userid: email
                }
            });

            if (!cart) {
                throw new Error('Carrinho não encontrado');
            }

            const newPayment = await this.Payment.create({
                userEmail: email,
                valorTotal: cart.totalPrice,
                metodoPagamento: 'cartao',
                status: status
            });

            if (newPayment) {
                cart.itens = [];
                cart.totalPrice = 0.0;
                await cart.save();
            }

            return newPayment ? newPayment : null;
        } catch (error) {
            throw error;
        }
    }

    // Metodo para pagamento por Pix
    async payPix(email, status) {
        try {
            const user = await this.User.findOne({
                where: {
                    email: email
                }
            });

            if (!user) {
                throw new Error('Usuário não encontrado');
            }

            const cart = await this.Cart.findOne({
                where: {
                    userid: email 
                }
            });

            if (!cart) {
                throw new Error('Carrinho não encontrado');
            }

            const newPayment = await this.Payment.create({
                userEmail: email,
                valorTotal: cart.totalPrice, 
                metodoPagamento: 'Pix',
                status: status
            });

            if (newPayment) {
                cart.itens = [];
                cart.totalPrice = 0.0;
                await cart.save();
            }

            return newPayment ? newPayment : null;
        } catch (error) {
            throw error;
        }
    }

    // Método para retornar todos os pagamentos
    async findAllPayments() {
        try {
            const AllPayments = await this.Payment.findAll();
            return AllPayments ? AllPayments : null;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = PayService;