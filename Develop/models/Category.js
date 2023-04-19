const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns - josie
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  },
  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  },

);

module.exports = Category;



// Your database should contain the following four models, including the requirements listed for each model:

// * `Category`

//   * `id`

//     * Integer.
  
//     * Doesn't allow null values.
  
//     * Set as primary key.
  
//     * Uses auto increment.

//   * `category_name`
  
//     * String.
  
//     * Doesn't allow null values.
