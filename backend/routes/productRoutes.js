import express from 'express';
import Product from '../models/productModel.js';
const productRouter = express.Router();

productRouter.get('/', async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

productRouter.post('/', (req, res) => {
  const newProduct = new Product({
    Name: req.body.Name,
		url: req.body.url,
		Category: "Chair",
		Price: req.body.Price,
		stock: req.body.stock,
		Description: req.body.Description,
		selectedImage: req.body.selectedImage,
  })

  newProduct.save()
  .then(prods => res.json("New Product Added"))
  .catch(err => res.status(400).json('Error: '+err))
})

productRouter.route('/delete/:id').delete((req, res) => {
  Product.findByIdAndDelete(req.params.id)
  .then(() => res.json('Products deleted'))
  .catch(err => res.status(400).json('Error: '+err))
})

export default productRouter;
