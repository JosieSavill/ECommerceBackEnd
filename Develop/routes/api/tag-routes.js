const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try {
    const tagData = await Tag.findAll();
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try {
  
    const tagData = await Tag.findOne( {
      where: {id: req.params.id}
      
    });
    res.status(200).json(tagData);
  } catch(err){
      console.log(err)
  }
  // be sure to include its associated Product data
});



    // create new product
router.post('/', (req, res) => {
  // post to insomia:
    // {
    //   tag_name: 'aqua',

    // },



    // console.log(err)
    
Tag.create(req.body)
  .then((tag) => {
    // if there's product tags, we need to create pairings to bulk create in the ProductTag model
    // if (req.body.tag_name.length) {
    //   const productTagIdArr = req.body.tag_name.map((tag_id) => {
    //     return {
    //       product_id: product.id,
    //       tag_id,
    //     };
    //   });
    //   return ProductTag.bulkCreate(productTagIdArr);
    // }
    // if no product tags, just respond
    res.status(200).json(tag);
  })
  .then((tag_name) => res.status(200).json(tag_name))
  .catch((err) => {;
    res.status(400).json(err);
  });

});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tag = await Tag.findByPk(req.params.id);
    if (!tag) {
      return res.status(404).json({error: "Tag no found"});
    }

    tag.name = req.body.name;
    await tag.save();

    res.json(tag);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error'});
  }

});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value = josie
  try {
    const tag = await Tag.findByPk(req.params.id);
    if(!tag) {
      return res.status(404).json({error: 'Tag not found'})
    }

    await tag.destroy();

    res.json({message: 'Tag deleted successfully'});
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Server error'});
  }
});

module.exports = router;



