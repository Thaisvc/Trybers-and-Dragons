import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Monster from './Monster';

// Crie 3 objetos do tipo Character:
const player1 = new Character('player1');
const player2 = new Character('player2');
const player3 = new Character('player3');

player1.levelUp();
player1.levelUp();
player1.levelUp();

// Crie 2 objetos do tipo Monster:
const monster1 = new Monster();
const monster2 = new Monster();

// Crie um objeto do tipo PVP
const pvp = new PVP(player2, player3);

// Crie um objeto do tipo PVE
const pve = new PVE(player1, [monster1, monster2]);

// Crie uma função chamada runBattles
function runBattles(battles: Battle[]) :void {
  battles.forEach((battle) => {
    battle.fight();
  });
} 
export {
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
};