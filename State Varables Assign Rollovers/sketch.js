// State Variables: Rollovers
// Ian Fuchs
// Feb 12 2020
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let corner = 0;
let x,y;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  rect(0, 0, width/2,height/2);
  rect(width/2,0,width/2,height/2);
  rect(0,height/2,width/2,height/2);
  rect(width/2,height/2,width/2,height/2);
  mouseCorner(mouseX,mouseY);
}

function mouseCorner(x,y){ //if mouse divi something (so in a certain quad) set corner to a number
  if (x <= windowWidth/2 && y <= windowHeight/2){
    corner = 1;
  }
}