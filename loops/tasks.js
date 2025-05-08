// fizzbuzz-core.js

function obtenerSalida(numero) {
    let salida = "";

    if (numero % 3 === 0) salida += "Fizz";
    if (numero % 5 === 0) salida += "Buzz";
    if (numero % 7 === 0) salida += "Woof";

    return salida || numero.toString();
}

function generarSecuencia(start = 1, end = 105) {
    let resultado = [];
    for (let i = start; i <= end; i++) {
        resultado.push(obtenerSalida(i));
    }
    return resultado;
}

module.exports = {
    obtenerSalida,
    generarSecuencia
};

