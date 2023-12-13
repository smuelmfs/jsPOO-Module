class Property {
  constructor(area, price) {
    this.area = area;
    this.price = price;
  }

  getPricePerSquareMeter() {
    return this.price / this.area;
  }
}

class House extends Property {}

const land = new Property(200, 2000);
const someHouse = new House(120, 200000);

console.log(land);
console.log(someHouse.getPricePerSquareMeter());
console.log(someHouse instanceof House);
console.log(someHouse instanceof Property);

class Apartament extends Property {
  constructor(number, area, price) {
    super(area, price);
    this.number = number;
  }

  getFloor() {
    return this.number.slice(0, -2);
  }
}

const apartament = new Apartament("201", 100, 2000000000);

console.log(apartament);
console.log(apartament.getPricePerSquareMeter());
console.log(apartament.getFloor());
