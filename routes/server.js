const express = require('express')
const server = express()

server.listen(8000, () => { 
    console.log('Server is started') 
})

server.get('/', (req, res) => {
    res.send('Главная страница!');
});

server.get('/user', (req, res) => {
    res.send('This is the server ask!');
});

server.get('/catalog', (req, res) => {
    res.send('All goods!');
});