const cantidadItems = parseInt(process.argv[3]);
const items = process.argv.slice(4, 4 + cantidadItems);

function ShoppingList(items) {
  this.items = {};

  for (const item of items) {
    this.items[item] = (this.items[item] || 0) + 1;
  }

  this.printList = function() {
    console.log(this.items);
  };
}

const listaCompra = new ShoppingList(items);
listaCompra.printList();
