interface SimpleFighter {
  // atributos:
  lifePoints: number;
  strength: number;

  // métodos:
  attack(enemy:SimpleFighter): void;
  receiveDamage(attackPoints:number): number;
}

export default SimpleFighter;