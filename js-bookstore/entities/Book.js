const Product = require("./Product.js");

module.exports = class Book extends Product {
  constructor(
    title,
    synopsism,
    genre,
    pages,
    author,
    description,
    price,
    inStock = 0
  ) {
    super(`Livro ${title}`, description, price, inStock);
    this.title = title;
    this.synopsism = synopsism;
    this.genre = genre;
    this.pages = pages;
    this.author = author;
  }
};
