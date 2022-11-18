export default abstract class Race {
  // constructor(private firstName: string, private lastName: string) 

  constructor(private _name: string, private _dexterity: number) {
    this._name = _name;
    this._dexterity = _dexterity;
  }

  get name():string { // METADO QUE LE O ATRIBUTO NAME
    return this._name; 
  }

  get dexterity(): number { 
    return this._dexterity; 
  }

  abstract get maxLifePoints(): number ;
  
  static createdRacesInstances() {
    throw new Error('Not implemented');
  }
}
