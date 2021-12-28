
const express = require('express');
const app = express();

app.use(express.json())

app.get('/', function(req, res) {
    res.sendFile('/public/index.html', { root: __dirname })
    res.sendFile('/public/main.js', { root: __dirname })
    res.sendFile('/public/main.css', { root: __dirname })
 })

 app.get('/main.js', function(req, res) {
   res.sendFile('/public/main.js', { root: __dirname })
})

app.get('/main.css', function(req, res) {
   res.sendFile('/public/main.css', { root: __dirname })
})

 app.get('/login', function(req, res) {
   res.sendFile('/public/login/index.html', { root: __dirname })
})

app.get('/register', function(req, res) {
   res.sendFile('/public/register/index.html', { root: __dirname })
})



 app.listen(3000, function(){
    console.log('Servidor iniciado na porta 3000')
 })