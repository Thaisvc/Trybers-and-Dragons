import Archetype from './Archetype';

class Ranger extends Archetype {
  private static _ranger = 0;
  private _energyType: string;

  constructor(name:string) {
    super(name);
    Ranger._ranger += 1;
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances() {
    return this._ranger;
  }

  get energyType(): string {
    return this._energyType;
  }
}

export default Ranger;