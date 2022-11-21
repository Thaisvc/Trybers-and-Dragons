import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private static _mage = 0;
  private _energyType: EnergyType;

  constructor(name:string) {
    super(name);
    Mage._mage += 1;
    this._energyType = 'mana';
  }

  static createdArchetypeInstances() {
    return this._mage;
  }

  get energyType():EnergyType {
    return this._energyType;
  }
}

export default Mage;