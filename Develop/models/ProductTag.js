const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
const Product = require("./Product")


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

module.exports = ProductTag;



// Your database should contain the following four models, including the requirements listed for each model:

// * `ProductTag`

//   * `id`

//     * Integer.

//     * Doesn't allow null values.

//     * Set as primary key.

//     * Uses auto increment.

//   * `product_id`

//     * Integer.

//     * References the `Product` model's `id`.

//   * `tag_id`

//     * Integer.

//     * References the `Tag` model's `id`.