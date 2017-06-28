var Enemy = function(positionY, enemyNumber) {
  this.avaliableEnemy = ["shark", "otherSurfer", "reef", "beachBoy"];
  this.name = this.getRandomEnemy();
  this.enemyPositionY = this.getRandomPositionY();
  console.log("Enemy Position: " + this.enemyPositionY);
  this.createEnemy(enemyNumber);
};

Enemy.prototype.getRandomEnemy = function(){
  return this.avaliableEnemy[Math.floor(Math.random()*this.avaliableEnemy.length)];
};

Enemy.prototype.getRandomPositionY = function(){
  console.log("Hola");
 return Math.random() * (gameView.height() / 2) + (gameView.height() / 4) + "px";
};

Enemy.prototype.createEnemy = function(enemyNumber){
  console.log("Entro en Create Enemy yeahhh");
  setTimeout(function(){
    var width = $(window).width();
    var newEnemy = $('<div>').addClass('enemy').attr('id', 'enemy' + enemyNumber).css({
      top: this.enemyPositionY,
      // left: -50
    });
    gameView.append(newEnemy);
    // new Enemy(this.getRandomPositionY());
    // $( "#obstacleContainer" ).append( "<div class='obstacle'<" );
  }, 3000);
};
