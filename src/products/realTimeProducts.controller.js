const { Router } = require('express');
const ProductManager = require('../class/ProductManager');
const productManager = new ProductManager('src/files/products.json');
const router = Router();

const products = productManager.getProducts()

router.get('/', (req, res) => {
    res.render('realTimeProducts.handlebars', {products, title:"Products in real time"})
})

module.exports = router