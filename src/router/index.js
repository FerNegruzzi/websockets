const productsController = require('../products/products.controller')
const realTimeProductsController = require('../products/realTimeProducts.controller')

const router = app => {
    app.use('/products', productsController)
    app.use('/realTimeProducts', realTimeProductsController)
}

module.exports = router