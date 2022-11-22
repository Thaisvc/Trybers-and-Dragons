import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  protected _player2: Fighter;

  constructor(player: Fighter, player2: Fighter) {
    super(player);
    this._player2 = player2;
    super.fight();
  }

  /* fight(): number {
    this.player.attack(this._player2);
    this._player2.attack(this.player);
    if (this.player.lifePoints === -1) {
      return -1;
    }
    return 1;
  } */ // OUTRA OPÇ

  fight(): number {
    if (this.player.lifePoints > 0 && this._player2.lifePoints > 0) {
      this.player.attack(this._player2);
      this._player2.attack(this.player);
    }
    if (this.player.lifePoints === -1) {
      return -1;
    }
    return 1;
  }
}

export default PVP;