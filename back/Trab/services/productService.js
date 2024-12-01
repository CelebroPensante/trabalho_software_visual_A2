// ./services/productService.js

class ProductService {
    constructor(ProductModel) {
        this.Product = ProductModel;
    }

    // Método para criar um novo produto
    async create(nome, descricao, preco, estoque) {
        try {
            const newProduct = await this.Product.create({
                nome: nome,
                descricao: descricao,
                preco: preco,
                estoque: estoque
            });
            return newProduct ? newProduct : null;
        } catch (error) {
            throw error;
        }
    }

    // Método para retornar todos os produtos
    async findAll() {
        try {
            const AllProducts = await this.Product.findAll();
            return AllProducts ? AllProducts : null;
        } catch (error) {
            throw error;
        }
    }

    // Método para atualizar um produto
    async update(id, nome, descricao, preco, estoque) {
        try {
            const product = await this.Product.update({
                nome: nome,
                descricao: descricao,
                preco: preco,
                estoque: estoque
            }, {
                where: {
                    id: id
                }
            });
            return product ? product : null;
        } catch (error) {
            throw error;
        }
    }

    // Método para deletar um produto
    async delete(id) {
        try {
            const deletedProduct = await this.Product.destroy({
                where: {
                    id: id
                }
            });
            return deletedProduct ? deletedProduct : null;
        } catch (error) {
            throw error;
        }
    }

    // Método para buscar um produto pelo nome
    async findByName(nome) {
        try {
            const product = await this.Product.findOne({
                where: {
                    nome: nome
                }
            });
            return product ? product : null;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ProductService;