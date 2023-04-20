// import models - josie
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products - josie
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag) - josie 
Product.belongsToMany(Tag, {through: ProductTag});

// Tags belongToMany Products (through ProductTag) - josie
Tag.belongsToMany(Product, {through: ProductTag});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
