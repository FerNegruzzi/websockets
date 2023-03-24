const socket = io()

const productTitle = document.getElementById('title')
const productDescription = document.getElementById('description')
const productCode = document.getElementById('code')
const productPrice = document.getElementById('price')
const productStock = document.getElementById('stock')
const productCategory = document.getElementById('category')
const productThumbnail = document.getElementById('thumbnail')

socket.on('productList', products => {
    console.log(products);
    
    products.forEach((product) =>{
        productTitle.innerHTML = product.title
        productDescription.innerHTML = product.description
        productCode.innerHTML = product.code
        productPrice.innerHTML = product.price
        productStock.innerHTML = product.stock
        productCategory.innerHTML = product.category
        productThumbnail.innerHTML = product.thumbnail
    })


})