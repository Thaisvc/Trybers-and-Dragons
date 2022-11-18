import Archetype from './Archetype';

class Warrior extends Archetype {
  private static _warrior = 0;
  private _energyType: string;

  constructor(name:string) {
    super(name);
    Warrior._warrior += 1;
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances() {
    return this._warrior;
  }

  get energyType(): string {
    return this._energyType;
  }
}

export default Warrior;