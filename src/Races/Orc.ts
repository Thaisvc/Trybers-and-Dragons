import Race from './Race';

class Orc extends Race {
  private static _orcCout = 0;
  private _maxLifePoints:number;
  
  constructor(_name:string, _dexterity:number) {
    super(_name, _dexterity);
    this._maxLifePoints = 74;
    Orc._orcCout += 1;
  }

  static createdRacesInstances() {
    return this._orcCout;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
export default Orc;