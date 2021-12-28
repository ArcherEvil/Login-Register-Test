
const express = require('express');
const app = express();

app.use(express.json())

app.get('/', function(req, res) {
    res.sendFile('/public/index.html', { root: __dirname })
 })



 app.listen(3000, function(){
    console.log('Servidor iniciado na porta 3000')
 })