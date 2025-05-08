

const { obtenerSalida, generarSecuencia } = require('./fizzbuzz-core');

const prompt = require('prompt-sync')();

const eleccion = prompt("¿Qué quieres hacer?\n1: Ver toda la secuencia (1 al 105)\n2: Ver solo una línea específica\n");

if (eleccion === "1") {
    const resultado = generarSecuencia(1, 105);
    resultado.forEach(linea => console.log(linea));
} else if (eleccion === "2") {
    const numeroEspecifico = parseInt(prompt("Ingresa un número entre 1 y 105: "), 10);

    if (!isNaN(numeroEspecifico) && numeroEspecifico >= 1 && numeroEspecifico <= 105) {
        console.log(obtenerSalida(numeroEspecifico));
    } else {
        console.log("Número inválido. Debe estar entre 1 y 105.");
    }
} else {
    console.log("Opción no válida.");
}
