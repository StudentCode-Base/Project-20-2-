var bath
var eat
var sleep
var gym
var move
var brush
var bg
var drink
function preload(){
  bg = loadImage('assets/iss.png')
  sleep= loadImage('assets/sleep.png')
  eat = loadAnimation("assets/eat1.png","assets/eat2.png");
  bath = loadAnimation("assets/bath1.png","assets/bath2.png");
  gym = loadAnimation("assets/gym1.png","assets/gym2.png");
  move = loadAnimation("assets/move.png","assets/move.png","assets/move1.png","assets/move1.png");
  brush = loadAnimation("assets/brush.png");
  drink = loadAnimation("assets/drink1.png","assets/drink2.png");
}
function setup() {
  createCanvas(800,400);
 sk= createSprite(400, 200, 50, 50);
 sk.addImage(sleep)
 sk.scale=0.1
}

function draw() {
  background(bg);  
  drawSprites();
  if (keyDown('UP_ARROW')){
    sk.addAnimation('bathing',bath)
    sk.changeAnimation('bathing')
  }
  if (keyDown('DOWN_ARROW')){
    sk.addAnimation('gym',gym)
    sk.changeAnimation('gym')
  }
  if (keyDown('RIGHT_ARROW')){
    sk.addAnimation('eating',eat)
    sk.changeAnimation('eating')
  }
  if (keyDown('LEFT_ARROW')){
    sk.addAnimation('move',move)
    sk.changeAnimation('move')
  }
  if (keyDown('D')){
    sk.addAnimation('drinking',drink)
    sk.changeAnimation('drinking')
  }
  if (keyDown('SPACE')){
    sk.addAnimation('brushing',brush)
    sk.changeAnimation('brushing')
  }

}