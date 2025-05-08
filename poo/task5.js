const numberOfFriends = parseInt(process.argv[3]);
const names = process.argv.slice(4, 4 + numberOfFriends);

function FriendsList(namesArray) {
  this.friends = namesArray;
  this.printList = function() {
    console.log(JSON.stringify(this.friends));
  };
}

const lista = new FriendsList(names);
lista.printList();
s