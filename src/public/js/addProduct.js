const socket = io();

const createProductForm = document.getElementById('addProduct')

createProductForm.addEventListener('submit', e => {
    e.preventDefault()

    const data = new FormData(createProductForm)
    const obj = {}

    data.forEach((value, key) => obj[key] = value)

    socket.emit('addProduct', obj)
})