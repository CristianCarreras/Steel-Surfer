var Enemy = function(positionX, positionY) {
  this.avaliableEnemy = ["shark", "otherSurfer", "reef", "beachBoy"];
  this.name = this.getRandomEnemy();
  this.enemyPositionY = this.getRandomPositionY();
};

Enemy.prototype.getRandomEnemy = function(){
  return this.avaliableEnemy[Math.floor(Math.random()*this.avaliableEnemy.length)];
};

Enemy.prototype.getRandomPositionY = function(){
  console.log("Hola");
 return Math.random() * (gameView.height() / 2) + (gameView.height() / 4);
};
