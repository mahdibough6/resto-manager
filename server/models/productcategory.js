'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Product , {
        foreignKey: 'productCategoryId'
      })
      this.belongsTo(models.CoffeeShop,{
        foreignKey: 'coffeeShopId'
      })
    }
  }
  ProductCategory.init({
    name: DataTypes.STRING,
    status: {
      type:DataTypes.STRING,
      defaultValue:'active'
    },
    coffeeShopId: {
      allowNull: false,
      type: DataTypes.UUID,
      references: {
        model: 'CoffeeShops',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'ProductCategory',
  });
  return ProductCategory;
};