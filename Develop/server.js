const express = require('express');
const routes = require('./routes');
const Sequelize = require('sequelize');

// requiring models - josie
const Category = require('./models/Category');
const Product = require('./models/Product');
const Tag = require('./models/Tag');
const ProductTag = require('./models/ProductTag');

// import sequelize connection - josie
const sequelize = require('./config/connection'); 

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server - josie
sequelize.sync({ force: false}).then(() => {
  app.listen(PORT, () => {
  console.log(`App listening now on http://localhost:${PORT}!`);})
});


// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log('Now listening'));
// });