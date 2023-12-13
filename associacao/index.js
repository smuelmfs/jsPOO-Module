const Address = require("./Address");
const Person = require("./Person");

const addr = new Address(
  "Conselheiro Cipriano Soares",
  52,
  "Salgado Filho",
  "BH",
  "MG"
); // não precisaria disso
const samuel = new Person("Samuel", addr);

console.log(samuel);
console.log(samuel.address.fullAddress());
