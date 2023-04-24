'use strict';
const {
  Model
} = require('sequelize');




module.exports = (sequelize, DataTypes) => {
  class Product extends Model {

    static associate(models) {

      this.belongsToMany(models.Order , {
        through: models.OrderedProduct,
        foreignKey: 'productId'
      });
      this.belongsTo(models.ProductCategory ,{
        foreignKey: 'productCategoryId'
      })
      this.belongsTo(models.CoffeeShop ,{
        foreignKey: 'coffeeShopId'
      })
      
    }
  }
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    state: DataTypes.STRING,
    productCategoryId:{
      type: DataTypes.INTEGER,
      references: {
        model: 'ProductCategories',
        key: 'id'
      }
    },
    coffeeShopId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'CoffeeShops',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};