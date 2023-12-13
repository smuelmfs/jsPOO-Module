//criando uma função para criar um objeto
function Book(title, pages, tags, author) {
  //função livro com os parâmetros que todo livro tem
  this.title = title;
  this.pages = pages;
  this.tags = tags;
  this.author = author;
  this.published = false;
  this.inStock = 0;
  this.addOnStock = function addOnStock(quantity) {
    this.inStock += quantity;
  };
  this.save = function () {
    //salva no banco de dados
  };
}

const tags = ["Fantasy", "Adventure", "Fun"];

const diarioDeUmBanana = new Book(
  "Diario de um banana",
  250,
  tags,
  "Jeff Kinney"
);

console.log(diarioDeUmBanana);
