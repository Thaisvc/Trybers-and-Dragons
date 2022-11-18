import Archetype from './Archetype';

class Necromancer extends Archetype {
  private static _necromancer = 0;
  private _energyType: string;

  constructor(name: string) {
    super(name);
    Necromancer._necromancer += 1;
    this._energyType = 'mana';
  }

  static createdArchetypeInstances() {
    return this._necromancer;
  }

  get energyType(): string {
    return this._energyType;
  }
}

export default Necromancer;