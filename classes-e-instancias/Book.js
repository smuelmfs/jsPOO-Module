class Book {
  constructor(title) {
    this.title = title;
    this.published = false;
  }
  publish() {
    this.published = true;
  }
}

const diarioDeUmBanana = new Book("Diario de um banana");

diarioDeUmBanana.publish();

console.log(diarioDeUmBanana);

console.log(diarioDeUmBanana instanceof Book); //True
console.log(diarioDeUmBanana instanceof Array); //False
