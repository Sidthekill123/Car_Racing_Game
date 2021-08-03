var database;
var gameState = 0;
var playerCount = 0;
var form;
var game;
var player;
var allPlayers;
var car1,car2,car3,car4;
var cars;
var car1Image,car2Image,car3Image,car4Image,trackImage;
function preload(){
car1Image = loadImage("images/car1.png");
car2Image = loadImage("images/car2.png");
car3Image = loadImage("images/car3.png");
car4Image = loadImage("images/car4.png");
trackImage = loadImage("images/track.jpg");
}
function setup(){
    createCanvas(displayWidth-200,displayHeight-300);
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
        game.play();
    }
    if(gameState === 2){
        game.end();
    }
}