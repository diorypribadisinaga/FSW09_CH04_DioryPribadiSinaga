

const fs = require('fs')
const express = require('express');
const app = express();
const path = require('path');
const view = path.join(__dirname + '/public/');

app.use(express.static('public'))
app.use('/public/css', express.static(__dirname + '/public/css'))
app.use('/public/img', express.static(__dirname + '/public/img'))
app.use('/public/images', express.static((__dirname + '/public/images')))
app.get('/', function (req, res) {
    res.sendFile(path.join(view, 'index.html'));
});
app.get('/carimobil', function (req, res) {
    res.sendFile(path.join(view + 'carimobil.html'));
});
// const sewa = path.join(view + 'index.html')
// const tombol = document.getElementById('tombol')
function cari() {
    app.get('/carimobil', function (req, res) {
        res.sendFile(path.join(view + 'carimobil.html'));
    });
}
// tombol.onclick(cari())
app.listen(3002)
console.log('localhost:3002 ');