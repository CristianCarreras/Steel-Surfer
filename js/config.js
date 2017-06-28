//--------------------------//
//----   CONFIG FILE    ----//
//--------------------------//

// ------ GLOBAL Var -
var PLAYER_HEALTH = 100;
var PLAYER_SPEED  = 5;

var WAVE_SPEED    = 10; //MS for repeat interval ++ms = --speed
var WAVE_LENGTH   = 2000; //px for the wave pic

var FPS           = 60;
var DELTA_TIME    = FPS / 1000;

var RESET_COUNTER = 0;

// ------ Positions Control -
var playerPositionY  = $("#player").position().top;
var playerPositionX  = $("#player").position().left;
var wave1PositionY   = $("#wave1").position().top;
var wave2PositionY   = $("#wave2").position().left;
var wave1PositionX   = $("#wave1").position().top;
var wave2PositionX   = $("#wave2").position().left;

// ------ DOM Control -
var screenView = $("#screen");
var scoreView  = $("score");
var gameView   = $("#game");
var playerView = $("#player");
var wave1View  = $("#wave1");
var wave2View  = $("#wave2");

// ------ Collisions -
