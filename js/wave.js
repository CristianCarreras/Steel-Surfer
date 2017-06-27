var Wave = function() {

};

Wave.prototype.tie = function(){
  var movingWaves = setInterval(moveWave, WAVE_SPEED);
  var concatingWaves = setInterval(repeatWaves, (WAVE_LENGTH / DELTA_TIME) * WAVE_SPEED);
  var waveMovement = RESET_COUNTER; // Initial position of the waves movement
  function moveWave() {
    waveMovement -= DELTA_TIME * WAVE_SPEED;
    var waveMovement2 = waveMovement + WAVE_LENGTH;
    var position1 = waveMovement + "px";
    var position2 = waveMovement2 + "px";
    wave1View.css("left", position1);
    wave2View.css("left", position2);
  }

  function repeatWaves() {
    wave1View.css("left", RESET_COUNTER + 'px'); //Initial Position Wave 1
    wave2View.css("left", WAVE_LENGTH + 'px'); //Initial Position Wave 2
    waveMovement = RESET_COUNTER;
  }
};
