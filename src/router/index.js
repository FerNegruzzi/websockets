const productsController = require('../products/products.controller')
const realTimeProductsController = require('../products/realTimeProducts.controller')
const createProductController = require('../products/createProduct.controller')

const router = app => {
    app.use('/createproduct', createProductController)
    app.use('/', productsController)
    app.use('/realtimeproducts', realTimeProductsController)
}

module.exports = router