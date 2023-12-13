class Product {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = 0;
  }

  addToStock(amount) {
    this.inStock += amount;
  }

  calculateDiscount(discount) {
    return this.price * ((100 - discount) / 100);
  }
}

const watch = new Product("Relógio de Pulso", "Relógio Apple Watch", 2500);

watch.addToStock(10);
console.log(watch);
console.log(watch.calculateDiscount(15));
console.log(watch.calculateDiscount(10));
