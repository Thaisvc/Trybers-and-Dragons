import { SimpleFighter } from './Fighter/index';

class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;
  
  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  // Os atributos da classe
  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  // os métodos 
  receiveDamage(attackPoints: number):number {
    const damage = attackPoints - this._lifePoints;

    if (damage > 0) {
      this._lifePoints -= damage;
    }

    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }

    return this.lifePoints;
  }

  attack(enemy:SimpleFighter): void {
    this.receiveDamage(enemy.strength);
  }
}

export default Monster;