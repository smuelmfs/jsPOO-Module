module.exports = class Order {
  #total;
  #items;
  #user;

  constructor(items, user) {
    items.forEach(({ product, quantity }) => {
      if (quantity > product.inStock) {
        throw new Error("Quantidade de itens não disponível");
      }
    });
    this.#items = items;
    this.#user = user;
    this.#total = items.reduce(
      (total, { product, quantity }) => total + product.price * quantity,
      0
    );
  }

  get data() {
    return {
      total: this.#total,
      items: this.#items,
      user: this.#user,
    };
  }
};
