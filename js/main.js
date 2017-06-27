$(document).ready(function() {
  var keyboard = new Keyboard();
  var wave = new Wave();
  wave.tie();

  $(document).on('keydown', function(e) {
    console.log("escucho tecla");
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
