//--------------------------//
//----   CONFIG FILE    ----//
//--------------------------//

// ------ GLOBAL Var -
var PLAYER_HEALTH = 100;

var FPS = 60;
var DELTA_TIME = 1000 / FPS;

// ------ Positions Control -
var playerPositionY = $("#player").position().top;
var playerPositionX = $("#player").position().left;

// ------ DOM Control -
var screenView = $("#screen");
var scoreView  = $("score");
var gameView   = $("#game");
var playerView = $("#player");
