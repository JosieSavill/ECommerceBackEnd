const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
const Product = require("./Product")
const Tag = require("./Tag")


class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns - josie
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    product_id: {
      type: DataTypes.INTEGER,
      // * References the `Product` model's `id` - josie
      references: {
        model: "Product",
        key: "id",
      }
      // autoIncrement: true,- josie
      // allowNull: false, - josie
    },

    tag_id: {
      type: DataTypes.INTEGER,
      // * References the `Tag` model's `id` - josie
      references: {
        model: "Tag",
        key: "id",
      }
      // autoIncrement: true, - josie
      // allowNull: false, - josie
    },


  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

ProductTag.hasOne(Tag, {
  foreignKey: 'id'
});

module.exports = ProductTag;



