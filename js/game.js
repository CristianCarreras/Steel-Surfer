//TODO: GAME FINISHED SCRREN

function Game(){
    // Set FPS for this game
    this.fps = 30;

    // create the player for this game
    this.player = new Player(200/this.fps);

    // TODO: Print the score value in the screen
    // Score for the player
    this.score = 0;

    // configure the player events
    $(document).on('keydown', this.player.keyboardEventDown.bind(this.player));
    $(document).on('keyup', this.player.keyboardEventUp.bind(this.player));


    // start with an empty array of enemies
    this.enemies = [];

    // configure enemy generation
    var that = this;
    setInterval(function() {
      that.createEnemy();
    }, 2 * 1000);
}

Game.prototype.checkCollision = function(player, enemy){
  if (player.player.collision(enemy.enemy).length >  0) {
    return true;
  }
  return false;
};


Game.prototype.createEnemy = function() {
  var that = this;
  var pxSec = Math.random() * 100 + 50;
  var enemy = new Enemy(pxSec/ this.fps);
  this.enemies.push(enemy);
};

Game.prototype.move = function() {
  // move the enemies
  var that = this;
  this.enemies.forEach(function(enemy){
    if(that.checkCollision(that.player,enemy)){
      // TODO: Play a sound
      that.score += 10;
      enemy.delete();
    } else if(enemy.x > gameView.width()){
      enemy.delete();
    } else {
      enemy.move();
    }
  });

  // move the player
  this.player.move();
};