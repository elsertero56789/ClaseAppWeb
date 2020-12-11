const {crearArchivo} = require("multiplicar");
const argv = require('yargs');
const crearArchivo = require('./mulriplicar/multiplicar');

let argv = process.argv;
let paramtro = argv[2];
let base = paramtro.split('=')[1];
console.log(base);