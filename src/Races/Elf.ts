import Race from './Race';

class Elf extends Race {
  private static _elfCout = 0;
  private _maxLifePoints:number;

  constructor(_name:string, _dexterity:number) {
    super(_name, _dexterity);
    this._maxLifePoints = 99;
    Elf._elfCout += 1;
  }

  static createdRacesInstances() {
    return this._elfCout;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;