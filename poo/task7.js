const marca = process.argv[3];
const modelo = process.argv[4];
const anio = parseInt(process.argv[5]);
const color = process.argv[6];
const puertas = parseInt(process.argv[7]);
const kilometraje = parseInt(process.argv[8]);
const tipoMotor = process.argv[9];

function Car(marca, modelo, anio, color, puertas, kilometraje, tipoMotor) {
this.marca = marca;
this.modelo = modelo;
this.anio = anio;
this.color = color;
this.puertas = puertas;
this.kilometraje = kilometraje;
this.tipoMotor = tipoMotor;

this.describe = function() {
    console.log(`${this.marca} ${this.modelo} (${this.anio}) - ${this.color}, ${this.puertas} puertas, ${this.kilometraje} km, ${this.tipoMotor}`);
};
}

const auto = new Car(marca, modelo, anio, color, puertas, kilometraje, tipoMotor);
auto.describe();
