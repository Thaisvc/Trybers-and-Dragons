import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import { SimpleFighter } from './Fighter/index';

import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements SimpleFighter {
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
    this._dexterity = Character.randomNumber();
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = Character.randomNumber();
    this._defense = Character.randomNumber();
    this._energy = {
      type_: this._archetype.energyType,
      amount: Character.randomNumber(),
    };
  }

  static randomNumber(): number {
    return getRandomInt(1, 10);
  }

  // Os atributos da classe Character podem ser lidos mas não podem ser alterados 
  
  get race() {
    return this._race;
  }

  get archetype() {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy { //  Lembre-se que energy é um objeto, portanto se você retornar ele diretamente o javascript permite que as propriedades desse objetos sejam alteradas, mesmo energy sendo privado
    return { ...this._energy };
  }

  // os métodos estendidos da interface Fighter
  receiveDamage(attackPoints:number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    }
    if (damage <= 0) {
      this._lifePoints -= 1;
    }
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }

    return this.lifePoints;
  }

  attack(enemy:SimpleFighter) {
    enemy.receiveDamage(this._strength);
  }

  levelUp() {
    this._maxLifePoints += Character.randomNumber();
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    
    this._strength += Character.randomNumber();
    this._dexterity += Character.randomNumber();
    this._defense += Character.randomNumber();
    this._energy.amount = 10;
    this._lifePoints = this._maxLifePoints;
  }

  special(enemy:SimpleFighter) {
    enemy.receiveDamage(this._lifePoints -= 20);
  }
}

export default Character;