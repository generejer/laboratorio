function Mail() {
    this.subject = "hello";
    this.message = "world";
    this.printMail = function() {
      console.log(`${this.subject}: ${this.message}`);
    };
  }
  
  const mail = new Mail();
  mail.printMail();
  