// ./services/cartService.js

class CartService {
    constructor(CartModel, ProductModel) {
        this.Cart = CartModel;
        this.Product = ProductModel;
    }

    async addItem(userid, item) {
        try {
            // Verificar se o produto existe
            const product = await this.Product.findOne({
                where: {
                    nome: item 
                }
            });

            if (!product) {
                throw new Error('Produto não encontrado');
            }

            let cart = await this.Cart.findOne({
                where: {
                    userid: userid
                }
            });

            if (!cart) {
                cart = await this.Cart.create({
                    userid: userid,
                    itens: [item]
                });
            } else {

                // Adiciona o novo item a lista de itens existente
                const updatedItens = [...cart.itens, item];
                cart.itens = updatedItens;
                await cart.save();
            }

            return cart;
        } catch (error) {
            console.error('Erro ao adicionar item ao carrinho:', error.message);
            console.error('Detalhes do erro:', error);
            throw new Error('Erro ao adicionar item ao carrinho');
        }
    }

    async showCart(userid) {
        try {
            const cart = await this.Cart.findOne({
                where: {
                    userid: userid
                }
            });

            if (!cart) {
                return [];
            }

            return cart.itens;
        } catch (error) {
            console.error('Erro ao mostrar itens do carrinho:', error.message);
            console.error('Detalhes do erro:', error);
            throw new Error('Erro ao mostrar itens do carrinho');
        }
    }

    // Método para excluir um item do carrinho
    async deleteItem(userid, item) {
        try {
            const cart = await this.Cart.findOne({
                where: {
                    userid: userid
                }
            });

            if (!cart) {
                throw new Error('Carrinho não encontrado');
            }

            const updatedItens = cart.itens.filter(i => i !== item);
            cart.itens = updatedItens;
            await cart.save();

            return cart;
        } catch (error) {
            console.error('Erro ao deletar item do carrinho:', error.message);
            console.error('Detalhes do erro:', error);
            throw new Error('Erro ao deletar item do carrinho');
        }
    }

}

module.exports = CartService;