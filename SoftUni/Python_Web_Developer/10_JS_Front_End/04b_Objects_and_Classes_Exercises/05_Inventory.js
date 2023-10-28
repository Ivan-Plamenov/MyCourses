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
