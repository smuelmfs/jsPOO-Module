class Wallet {
  #amount;
  #username;

  constructor() {
    this.#amount = 100.99 * 100; //transformando em um numero inteiro
  }

  get amount() {
    return this.#amount / 100; //acrescentando comportamento
  }

  set username(newUsername) {
    if (typeof newUsername === "string") {
      this.#username = newUsername;
    } else {
      throw new Error("Username must be a string");
    }
    this.#username = newUsername;
  }
  get username() {
    return this.#username;
  }
}

const myWallet = new Wallet();

console.log(myWallet.amount);

myWallet.username = "Samuel";
console.log(myWallet.username);

myWallet.username += " Messias";
console.log(myWallet.username);

myWallet.username = true;
