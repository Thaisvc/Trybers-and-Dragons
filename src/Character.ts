import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';

class Character implements Fighter {
   privado _name: string;
   privado _race: Race;
   privado _archetype: Archetype;
   privado _maxLifePoints: number;
   privado  _lifePoints: number;
   privado  _strength: number;
   privado _defense: number;
   privado _dexterity: number; 
   privado _energy: Energy;



    constructor(
        name: string,
    ) {
        this._name = name;
        this._dexterity = Character.randomNumber();
        this._race = new Elf(this._name, this._dexterity);
        this._archetype = new Mage(this._name);
        this._maxLifePoints = this._race.maxLifePoints / 2;
        this._lifePoints = this._maxLifePoints;
        this._strength = Character.randomNumber();
        this._defense = Character.randomNumber();
        this._energy = {
            type_: this._archetype.energyType,
            amount: Character.randomNumber(),
        };
    }

    static randomNumber() {
        return Math.floor(Math.random() * 10 + 1)
    }


}

export default Character;