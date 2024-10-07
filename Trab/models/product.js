// models/product.js
const Sequelize = require('sequelize');
module.exports = (sequelize) =>{
    const User = sequelize.define('Product',{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        nome:{
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        descricao:{
            type: Sequelize.STRING,
            allowNull: false
        },
        preco:{
            type: Sequelize.FLOAT,
            allowNull: false
        },
        estoque:{
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });
    return User;
    
};