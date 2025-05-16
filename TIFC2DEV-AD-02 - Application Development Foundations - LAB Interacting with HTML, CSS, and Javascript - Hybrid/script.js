// Cambiar el primer h1 de "¡Hola Mundo!" a "Adiós"
document.getElementById("primer-hola").innerHTML = "Adiós";

// Cambiar el color del h1 con id="red" a naranja
document.getElementById("red").style.color = "orange";

// Hacer que el h1 con id="marron" cambie a marrón cuando le den click
document.getElementById("marron").addEventListener("click", function () {
    this.style.color = "brown";
});
