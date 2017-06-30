//TODO: GAME FINISHED SCRREN

function Game(){
    // Set FPS for this game
    this.fps = 30;

    // create the player for this game
    this.player = new Player(PLAYER_SPEED/this.fps);

    // Score for the player
    this.score = 0;

    // configure the player events
    $(document).on('keydown', this.player.keyboardEventDown.bind(this.player));
    $(document).on('keyup', this.player.keyboardEventUp.bind(this.player));

    //Load sounds
    // var sharkSound = new Audio ("./sounds/france-tour.mp3");

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

Game.prototype.printScore = function() {
  scoreView.html(this.score);
};

Game.prototype.createEnemy = function() {
  var that = this;
  var pxSec = Math.random() * 250 + 100;
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
      // sharkSound.play();
    } else if(enemy.x > gameView.width()){
      enemy.delete();
      // that.score += 10;
    } else {
      enemy.move();
    }
  });

  // move the player
  this.player.move();
  // print the score
  this.printScore();
};
