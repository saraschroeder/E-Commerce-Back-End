const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
 Category.findAll(
  {
    include: {
      model: Product,
      attributes: ['product_name']
    }
  }
 )
 .then(categoryData => res.json(categoryData))
 .catch(err);
 res.status(500).json(err);
});

router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name
  })
  .then(categoryData => res.json(categoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
