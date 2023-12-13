const Character = require("./Character.js");

module.exports = class Warrior extends Character {
  constructor(name, lifepoints, attackPts, defensePts, shieldPts) {
    super(name, lifepoints, attackPts, defensePts);
    this.shieldPts = shieldPts;
    this.stace = "attacking";
  }
  attack(targetCharacter) {
    if (this.stance === "attacking") {
      super.attack(targetCharacter);
    }
  }

  switchStance() {
    if (this.stance === "attacking") {
      this.stance = "defending";
      this.defesnsePts += this.shieldPts;
    } else {
      this.stance = "attacking";
      this.defensePts -= this.shieldPts;
    }
  }
};
