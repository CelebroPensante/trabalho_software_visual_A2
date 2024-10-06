// models/cart.js
const Sequelize = require('sequelize');
module.exports = (sequelize) =>{
    const Cart = sequelize.define('Cart',{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        userid:{
            type: Sequelize.STRING,
            unique: false,
            allowNull: false
        },
        itens: {
            type: Sequelize.JSON,
            allowNull: false,
            defaultValue: []
        }
    });
    return Cart;
    
};