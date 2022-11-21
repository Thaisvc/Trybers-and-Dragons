import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private static _necromancer = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Necromancer._necromancer += 1;
    this._energyType = 'mana';
  }

  static createdArchetypeInstances() {
    return this._necromancer;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;