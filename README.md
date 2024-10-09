# Trabalho A2
Este repositório contém o projeto para composição de nota A2 da matéria de Desenvolvimento de Software Visual

## Descrição

Implementados os modulos de:
  - Produtos:
    -id: número inteiro, auto-incremento.
    - nome: string.
    - descrição: string.
    - preço: número decimal.
    - estoque: número inteiro.

    com as funções de:
      - criação de um novo produto (POST /products/newProduct).
      - listar todos os produtos (GET /getAllProducts).
      - atualizar um produto existente (PUT updateProduct).
      - deletar um produto (DELETE /deleteProduct).
        
  - Carrinhos de compras:
      - id: número inteiro, auto-incremento.
      - userId: referência ao usuário dono da cesta.
      - valorTotal: valor total dos produtos da cesta
      - itens: lista de produtos.
    
      com as funções de:
        - adicionar um produto à cesta (POST /cart/addItem).
        - remover um produto da cesta (DELETE /cart/deleteItem).
        - visualizar os itens na cesta (GET /cart/showCart).
    
    -Pagamento:
      -id: número inteiro, auto-incremento.
      - userId: referência ao usuário.
      - valorTotal: número decimal.
      - métodoPagamento: string (cartão de crédito ou PIX).
      - status: string (pendente, concluído, falhado).
        
      com as funções de:
        - realizar pagamento via cartão de crédito (POST /payments/paycreditcard).
        - realizar pagamento via PIX (POST /payments/payPix).
        - consultar transação (GET /payments/allpayments).

