const Character = require("./Character.js");

module.exports = class Thief extends Character {
  attack(targetCharacter) {
    targetCharacter.lifepoints -=
      (this.attackPts - targetCharacter.defensePts) * 2;
  }
};
