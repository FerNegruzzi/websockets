const socket = io();

const productsContainer = document.getElementById('allProducts');

socket.on('realTimeProducts', (products) => {
    let allProducts = [];
    try {
        allProducts = JSON.parse(products);
    } catch (error) {
        console.log('no se pudo parsear el archivo json', error);
    }
    if(Array.isArray(allProducts)){
        productsContainer.innerHTML = '';
        allProducts.forEach((product) => 
            productsContainer.append(productContainer(product))
        );
    }else{
        console.log('products no es un array');
    }
});

const productContainer = (product) => {
    const div = document.createElement('div');
    div.innerHTML = `
    
    <h1>Title: ${product.title}</h1>
    <h2>Description: ${product.description}</h2>
    <h2>Price: $${product.price}</h2>
    <h3>Id: ${product.id}</h3>
    <h3>Stock: ${product.stock}</h3>
    <h4>Category: ${product.category}</h4>
    <h5>Thumbnail: ${product.thumbnail}</h5>
    `;
    return div
};