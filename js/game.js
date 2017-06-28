function Game(){
    this.gameEnemy = [];
    this.enemyId = 0;
    this.addEnemy();
    this.move();
    this.intervalEnemyCreation;
}

Game.prototype.addEnemy = function() {
  var that = this;
  this.invervalEnemyCreation = setInterval(function() {
    that.enemyId++;
    var enemy = new Enemy(0, that.enemyId);
  }, 3 * 1000);
};

Game.prototype.move = function() {
  that = this;
  var intervalMoveEnemy = setInterval(function() {
    var enemyArray = $(".enemy");
    var speed = 3;
    for (var i = 0; i < enemyArray.length; i++) {
      var enemyId = enemyArray[i].id;
      // CODE HERE
      // clearInterval(intervalMoveEnemy);
      // clearInterval(that.intervalEnemyCreation);
      // Clear Interval if it detect there is a Collision
      var leftPos = $('#' + enemyId).position().left;
      $('#' + enemyId).css({
        left: leftPos += speed
      });
    }
  }, 50);
};
