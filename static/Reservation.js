class Reservation {
  constructor(guest, room, days) {
    this.guest = guest;
    this.room = room;
    this.days = days;
    this.total = days * Reservation.baseFee;
  }

  static baseFee = 150;

  static showBaseFee() {
    console.log(`Base Fee: ${Reservation.baseFee}`);
  }

  static get premiumFee() {
    return Reservation.baseFee * 1.5;
  }
}

Reservation.showBaseFee();

const r1 = new Reservation(3, "201", 5);
console.log(r1);

const r2 = new Reservation(4, "202", 3);
console.log(r2);

console.log(`Premium Fee: ${Reservation.premiumFee}`);

const r3 = new Reservation(5, "203", 2);
console.log(r3);
