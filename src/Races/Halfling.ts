import Race from './Race';

class Halfling extends Race {
  private static _halflingCout = 0;
  private _maxLifePoints: number;

  // constructor(_name:string, _dexterity:number, private _maxLifePoints: number) { ERRO NO TESTE / OUTRA FORMA
  constructor(_name:string, _dexterity:number) {
    super(_name, _dexterity);
    this._maxLifePoints = 60;
    Halfling._halflingCout += 1;
  }

  static createdRacesInstances() {
    return this._halflingCout;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
export default Halfling;