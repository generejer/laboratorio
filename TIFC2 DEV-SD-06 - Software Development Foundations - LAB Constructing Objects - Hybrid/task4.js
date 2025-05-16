const desde = process.argv[3];
const hasta = process.argv[4];

function Journey(inicio, fin) {
  this.inicio = inicio;
  this.fin = fin;
  this.describe = function() {
    console.log(`Booking a taxi from ${this.inicio} to ${this.fin}.`);
  };
}

const viaje = new Journey(desde, hasta);
viaje.describe();
