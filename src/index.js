const express = require('express');
const handlebars = require('express-handlebars');
const { Server } = require('socket.io');
const router = require('./router');
const productManager = require('./class/ProductManager');
const productFile = new productManager('src/files/products.json')

const port = 3000;

const products = productFile.getProducts();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

router(app)

const httpServer = app.listen(port, () => {
    console.log(`SV running at port ${port}`);
});

const io = new Server(httpServer);

io.on('connection', (socket) => {
    console.log('Client connected');

    socket.on('products', () =>{
        socket.emit('products', products)
    })
})