// Image Demo

let lionL, lionR;
let movingLeft = true;

function preload(){
  lionL = loadImage("assets/lion-left.png");
  lionR = loadImage("assets/lion-right.png");
}

function determineDirection(){
  if(pmouseX<mouseX){
    movingLeft = false;
  }
  else if(pmouseX>mouseX){
    movingLeft = true;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(220);
  determineDirection();

  if(keyIsPressed){
    tint(100,100,200);
  }

  if(movingLeft){
    image(lionL,mouseX,mouseY,130,90);
  }
  else{
    image(lionR,mouseX,mouseY,130,90);
  }

}