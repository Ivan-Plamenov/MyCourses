function createHeroRegister(input) {
  const heroes = [];

  for (const heroData of input) {
    const [name, level, items] = heroData.split(" / ");
    const hero = {
      name,
      level: Number(level),
      items: items.split(", ").join(", "),
    };
    heroes.push(hero);
  }

  heroes.sort((a, b) => a.level - b.level);

  for (const hero of heroes) {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`);
  }
}

// Test Cases
const input1 = [
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
];

// Expected Output :
// Hero: Hes
// level => 1
// items => Desolator, Sentinel, Antara
// Hero: Derek
// level => 12
// items => BarrelVest, DestructionSword
// Hero: Isacc
// level => 25
// items => Apple, GravityGun

const input2 = [
  "Batman / 2 / Banana, Gun",
  "Superman / 18 / Sword",
  "Poppy / 28 / Sentinel, Antara",
];

// Expected Output :
// Hero: Batman
// level => 2
// items => Banana, Gun
// Hero: Superman
// level => 18
// items => Sword
// Hero: Poppy
// level => 28
// items => Sentinel, Antara

createHeroRegister(input1);
createHeroRegister(input2);
