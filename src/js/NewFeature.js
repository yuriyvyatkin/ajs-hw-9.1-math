export default class NewFeature {
  constructor() {
    this.stoned = false;
  }

  getStoned() {
    return this.stoned;
  }

  setStoned(state) {
    this.stoned = Boolean(state);
  }

  getAttack() {
    return this.attack;
  }

  setAttack(cell) {
    if (cell > 10) {
      this.attack = 0;
    }

    const distance = (cell - 1) * 0.1 * this.attack;

    if (this.getStoned()) {
      const stupor = Math.floor(Math.log2(cell) * 5);
      const attackReducing = distance + stupor;
      const newAttack = Math.round(this.attack - attackReducing);

      this.attack = newAttack <= 0 ? 0 : newAttack;
    } else {
      this.attack = Math.round(this.attack - distance);
    }
  }
}
