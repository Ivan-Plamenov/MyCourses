function heroes() {
  function cast(spell) {
    this.mana--;
    console.log(`${this.name} casts ${spell}`);
  }

  function fight() {
    this.stamina--;
    console.log(`${this.name} slashes at the foe!`);
  }

  return {
    mage: (name) => {
      return {
        name: name,
        health: 100,
        mana: 100,
        cast: cast,
      };
    },
    fighter: (name) => {
      return {
        name: name,
        health: 100,
        stamina: 100,
        fight: fight,
      };
    },
  };
}
