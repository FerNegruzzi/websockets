const socket = io();

const productsContainer = document.getElementById('newProduct');

socket.on('realTimeProducts', (obj) => {
    console.log(obj);
    const { products } = obj;
    productsContainer.innerHTML = '';
    products.forEach((product) =>
    productsContainer.append(productContainer(product))
    );
});

socket.on('newProductRealTime', (newProduct) => {
    console.log(newProduct);
    productsContainer.append(productContainer(newProduct))
})

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