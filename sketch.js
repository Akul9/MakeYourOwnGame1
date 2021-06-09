var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var database;

var form, player, game;
 var charaters, challenger,pirate,rockstar,royalAgent;
 var challengerImg, pirateImg, rockstarImg, royalAgentImg;
function preload(){
  challengerImg = loadImage("./Images/Challenger.png");
  challengerImg.scale = 0.1;
  pirateImg = loadImage("./Images/Pirate.png");
  rockstarImg = loadImage("./Images/Rockstar.png");
  royalAgentImg = loadImage("./Images/royalAgent.png");



}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
