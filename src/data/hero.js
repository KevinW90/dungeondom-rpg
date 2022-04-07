export default function createHero(heroData) {
  return new Hero(heroData);
}

class Hero {
  constructor(_data) {
    this.name = _data.name;
    this.position = _data.position;
  }
}