class Person {
  constructor(name, address) {
    this.name = name;
    this.address = address; // ou "this.address = new Address (street, number, neighborhood, city, state)" vai puxar o arquivo Address.js
  }
}
module.exports = Person;
