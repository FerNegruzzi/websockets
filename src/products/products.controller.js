const { Router } = require('express');
const productManager = require('../class/ProductManager');
const productsFile = new productManager('src/files/products.json');
const router = Router();

const products = productsFile.getProducts();
router.get('/', (req, res) => {
    res.render('home.handlebars', { products })
})

module.exports = router