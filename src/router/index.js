const productsController = require('../products/products.controller')
const realTimeProductsController = require('../products/realTimeProducts.controller')
const createProductController = require('../products/createProduct.controller')

const router = app => {
    app.use('/products', productsController)
    app.use('/realtimeproducts', realTimeProductsController)
    app.use('/createproduct', createProductController)
}

module.exports = router