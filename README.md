# Trabalho A2

Este repositório contém o projeto para a composição da nota A2 da matéria de **Desenvolvimento de Software Visual**.

## Descrição

Foram implementados os seguintes módulos:

### 1. Produtos

- **Atributos:**
  - `id`: Número inteiro, auto-incremento.
  - `nome`: String.
  - `descrição`: String.
  - `preço`: Número decimal.
  - `estoque`: Número inteiro.

- **Funcionalidades:**
  - Criar um novo produto: `POST /products/newProduct`.
  - Listar todos os produtos: `GET /getAllProducts`.
  - Atualizar um produto existente: `PUT /updateProduct`.
  - Deletar um produto: `DELETE /deleteProduct`.

### 2. Carrinho de Compras

- **Atributos:**
  - `id`: Número inteiro, auto-incremento.
  - `userId`: Referência ao usuário dono do carrinho.
  - `valorTotal`: Valor total dos produtos no carrinho.
  - `itens`: Lista de produtos.

- **Funcionalidades:**
  - Adicionar um produto ao carrinho: `POST /cart/addItem`.
  - Remover um produto do carrinho: `DELETE /cart/deleteItem`.
  - Visualizar os itens no carrinho: `GET /cart/showCart`.

### 3. Pagamento

- **Atributos:**
  - `id`: Número inteiro, auto-incremento.
  - `userId`: Referência ao usuário.
  - `valorTotal`: Número decimal.
  - `métodoPagamento`: String (Cartão de crédito ou PIX).
  - `status`: String (Pendente, Concluído, Falhado).

- **Funcionalidades:**
  - Realizar pagamento via cartão de crédito: `POST /payments/payCreditCard`.
  - Realizar pagamento via PIX: `POST /payments/payPix`.
  - Consultar transações: `GET /payments/allPayments`.

