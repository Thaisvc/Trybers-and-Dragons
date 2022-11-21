import Fighter from '../Fighter';

abstract class Battle {
  constructor(protected player: Fighter) { }

  //  Should return 1 if player wins, -1 otherwise / Deve retornar 1 se o jogador vencer, -1 caso contrário
  fight(): number {
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}

export default Battle;
