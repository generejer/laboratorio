const subject = process.argv[3];
const message = process.argv[4];

function Mail(subject, message) {
  this.subject = subject;
  this.message = message;
  this.printMail = function() {
    console.log(`${this.subject}: ${this.message}`);
  };
}

const mail = new Mail(subject, message);
mail.printMail();
s