var Wave = function() {

};

Wave.prototype.tie = function(){
  var movingWaves = setInterval(moveWave, WAVE_SPEED * DELTA_TIME);
  var concatingWaves = setInterval(repeatWaves, (WAVE_LENGTH / (WAVE_SPEED * DELTA_TIME) * (WAVE_SPEED * DELTA_TIME))*3.34);
  var waveMovement = RESET_COUNTER; // Initial position of the waves movement
  function moveWave() {
    waveMovement += WAVE_SPEED * DELTA_TIME;
    console.log(waveMovement);
    var waveMovement2 = waveMovement - WAVE_LENGTH;
    var position1 = waveMovement + "px";
    var position2 = waveMovement2 + "px";
    wave1View.css("left", position1);
    wave2View.css("left", position2);
  }

  function repeatWaves() {
    wave1View.css("left", WAVE_LENGTH + 'px'); //Initial Position Wave 1
    wave2View.css("left", RESET_COUNTER + 'px'); //Initial Position Wave 2
    waveMovement = RESET_COUNTER;
  }
};
