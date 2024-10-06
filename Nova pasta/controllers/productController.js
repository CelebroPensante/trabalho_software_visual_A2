// ./controllers/productController.js

class ProductController {
    constructor(ProductService) {
        this.ProductService = ProductService;
    }

    // Método para criar um novo produto    
    async createProduct(req, res) {
        const { nome, descricao, preco, estoque } = req.body;
        try {
            const newProduct = await this.ProductService.create(nome, descricao, preco, estoque);
            res.status(200).json(newProduct);
        } catch (error) {
            res.status(500).json({ error: 'Ocorreu um erro ao gravar o novo produto.' });
        }
    }

    // Método para listar todos os produtos
    async findAllProducts(req,res){
        try{
            const AllProducts = await this.ProductService.findAll();
            res.status(200).json(AllProducts);
        }
        catch(error){
            res.status(500).json({error: 'Ocorreu um erro ao localizar todos os produtos.'})
        }
    }

    // Método para atualizar um produto
    async updateProduct(req, res) {
        const { id, nome, descricao, preco, estoque } = req.body;
        try {
            const updatedProduct = await this.ProductService.update(id, nome, descricao, preco, estoque);
            res.status(200).json(updatedProduct);
        } catch (error) {
            res.status(500).json({ error: 'Ocorreu um erro ao atualizar o produto.' });
        }
    }

    // Método para deletar um produto
    async deleteProduct(req, res) {
        const { id } = req.body;
        try {
            const deletedProduct = await this.ProductService.delete(id);
            res.status(200).json(deletedProduct);
        } catch (error) {
            res.status(500).json({ error: 'Ocorreu um erro ao deletar o produto.' });
        }
    }
}

module.exports = ProductController;