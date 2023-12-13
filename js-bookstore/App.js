const Database = require("./Database.js");
const Author = require("./entities/Author.js");
const Book = require("./entities/Book.js");
const Order = require("./entities/Order.js");
const Poster = require("./entities/Poster.js");
const User = require("./entities/User");

module.exports = class App {
  static #database = new Database();

  createUser(name, email, password) {
    const user = new User(name, email, password);
    App.#database.saveUser(user);
  }

  getUsers() {
    return App.#database.find("users");
  }

  createAuthor(name, nationality, bio) {
    const author = new Author(name, nationality, bio);
    App.#database.saveAuthor(author);
  }

  getAuthors() {
    return App.#database.find("authors");
  }

  createBook(title, synopsism, genre, pages, author, description, price) {
    const book = new Book(
      title,
      synopsism,
      genre,
      pages,
      author,
      description,
      price
    );
    App.#database.saveBook(book);
  }

  addBook(bookName, quantity) {
    App.#database.addBooksToStock(bookName, quantity);
  }

  getBooks() {
    return App.#database.find("books");
  }

  createPoster(name, description, heigh, width, price, inStock) {
    const poster = new Poster(name, description, heigh, width, price, inStock);
    App.#database.savePoster(poster);
  }

  addPoster(postername, quantity) {
    App.#database.addPostersToStock(postername, quantity);
  }

  getPosters() {
    return App.#database.find("posters");
  }

  createOrder(items, user) {
    const order = new Order(items, user);
    App.#database.saveOrder(order);
    order.data.items.forEach(({ product, quantity }) => {
      if (product instanceof Book) {
        App.#database.removeBooksFromStock(product.name, quantity);
      } else if (product instanceof Poster) {
        App.#database.removePostersFromStock(product.name, quantity);
      }
    });
  }

  getOrders() {
    return App.#database.find("orders");
  }

  showDatabase() {
    App.#database.showStorage();
  }
};
