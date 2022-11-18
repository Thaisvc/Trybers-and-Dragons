import Archetype from './Archetype';

class Mage extends Archetype {
  private static _mage = 0;
  private _energyType: string;

  constructor(name:string) {
    super(name);
    Mage._mage += 1;
    this._energyType = 'mana';
  }

  static createdArchetypeInstances() {
    return this._mage;
  }

  get energyType():string {
    return this._energyType;
  }
}

export default Mage;