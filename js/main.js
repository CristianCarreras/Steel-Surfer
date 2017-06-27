$(document).ready(function() {
  var keyboard = new Keyboard();
  var wave     = new Wave();
  var enemy    = new Enemy();
  console.log(enemy.enemyPositionY);
  wave.tie();

  $(document).on('keydown', function(e) {
    if (keyboard.isKeyUp(e)) {
      playerPositionY -= DELTA_TIME*300;
      playerView.css({
        transform: "translate(" +
          playerPositionX + "px, " +
          playerPositionY + "px)"
      });
    }
    if (keyboard.isKeyDown(e)) {
      playerPositionY += DELTA_TIME*300;
      playerView.css({
        transform: "translate(" +
          playerPositionX + "px, " +
          playerPositionY + "px)"
      });
    }
    if (keyboard.isKeyLeft(e)) {
      playerPositionX -= DELTA_TIME*300;
      playerView.css({
        transform: "translate(" +
          playerPositionX + "px, " +
          playerPositionY + "px)"
      });
    }
    if (keyboard.isKeyRight(e)) {
      playerPositionX += DELTA_TIME*300;
      playerView.css({
        transform: "translate(" +
          playerPositionX + "px, " +
          playerPositionY + "px)"
      });
    }
  });
});
