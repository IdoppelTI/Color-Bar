var player;
var drop;
var score = 0;

var c;
var ctx;

var playerImg;

var dead;

var vh;
var vw;

var colRed;
var colBlue;

var img = new Image();

function setup(){
  createCanvas(window.innerWidth, window.innerHeight);

  colRed = color("#CC758E");
  colBlue = color("#9876CC");

  vh = height / 100;
  vw = width/ 100;

  dead = false;

  player = new Player();
  drop = new Drop();

  c = document.getElementById('defaultCanvas0');
  ctx = c.getContext("2d");
  noStroke();
}

function draw(){
  background(color("#FFEEF4"));

  displayScore();

  displayGameOver();

  player.update();
  player.render();
  drop.update();
  drop.render();
}

function displayScore(){
  push();
  fill(color("white"));
  textFont("Comfortaa");
  textStyle(BOLD);
  textAlign(CENTER);
  textSize(150);
  text("" + score, width/2, height/3);
  pop();
}

function displayGameOver(){
  if(dead){
    push();
    stroke(color("#E07EA6"));
    fill(color("#FFEEF4"));
    strokeWeight(2 * vh);
    rectMode(CENTER);
    rect(width/2, height/3, width * 3/4, height/2, 20);
    pop();

    push();
    fill(color("#E07EA6"));
    textFont("Comfortaa");
    textStyle(BOLD);
    textAlign(CENTER);
    textSize(7 * vw);
    text("GAME OVER", width/2, height/3);
    pop();

    push();
    fill(color("#E07EA6"));
    textFont("Comfortaa");
    textStyle(BOLD);
    textAlign(CENTER);
    textSize(5 * vw);
    text("SCORE: " + score, width/2, height/3 + 10 * vh);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
