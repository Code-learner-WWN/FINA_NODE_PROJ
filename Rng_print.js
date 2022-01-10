const http = require('http');
var dt = require('./RNG.js');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('The Number rolled by d20 is: ' + dt.Rng());
    res.end();
  }).listen(8080);