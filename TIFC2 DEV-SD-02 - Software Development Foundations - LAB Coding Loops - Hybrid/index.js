

const { generarSecuencia } = require('./fizzbuzz-core');

const args = process.argv.slice(2);
const start = parseInt(args[0], 10) || 1;
const end = 105;

const resultado = generarSecuencia(start, end);
console.log(resultado.join('\n'));
