import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private static _ranger = 0;
  private _energyType: EnergyType;

  constructor(name:string) {
    super(name);
    Ranger._ranger += 1;
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances() {
    return this._ranger;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;