import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private static _warrior = 0;
  private _energyType: EnergyType;

  constructor(name:string) {
    super(name);
    Warrior._warrior += 1;
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances() {
    return this._warrior;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;