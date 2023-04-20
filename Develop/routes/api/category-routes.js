const router = require('express').Router();
const { Category, Product } = require('../../models/');

// The `/api/categories` endpoint - 


router.get('/', async (req, res) => {
  // find all categories 
  try {
    const categoryData = await Category.findAll();
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Products 
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value -
  
  try {
  
    const categoryData = await Category.findOne( {
      where: {id: req.params.id}
      // console log status 200???? 
    });
    res.status(200).json(categoryData);
  } catch(err){
      console.log(err)
  }
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  // create a new category
  try {
  
    const categoryData = await Category.create( {
      category_name: req.body.category_name
    });
    res.status(200).json(categoryData);
  } catch(err){
      console.log(err)
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
  
    const categoryData = await Category.update( {
      category_name: req.body.category_name
    },{
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(categoryData);
  } catch(err){
      console.log(err)
  }


});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
  
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(categoryData);
  } catch(err){
      console.log(err)
  }
});

module.exports = router;


