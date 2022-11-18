import Race from './Race';

class Dwarf extends Race {
  private static _dwarfCount = 0;
  private _maxLifePoints:number;
  
  constructor(_name:string, _dexterity:number) {
    super(_name, _dexterity);
    this._maxLifePoints = 80;
    Dwarf._dwarfCount += 1;
  }

  static createdRacesInstances(): number {
    return this._dwarfCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  } 
}

export default Dwarf;