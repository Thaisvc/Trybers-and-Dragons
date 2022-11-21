import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';

class Character implements Fighter {
  private _name: string;
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number; 
  private _energy: Energy;

  constructor(
    name: string,
  ) {
    this._name = name;
    this._dexterity = Character.randomNumber();
    this._race = new Elf(this._name, this._dexterity);
    this._archetype = new Mage(this._name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = Character.randomNumber();
    this._defense = Character.randomNumber();
    this._energy = {
      type_: this._archetype.energyType,
      amount: Character.randomNumber(),
    };
  }

  static randomNumber() {
    return Math.floor(Math.random() * 10 + 1);
  }
}

export default Character;