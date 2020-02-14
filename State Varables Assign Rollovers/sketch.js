// State Variables: Rollovers
// Ian Fuchs
// Feb 12 2020
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let corner = 0;
let x,y;
const FADE_SPEED = 3;

let corner1, corner2, corner3, corner4;
let Q1Fill = 255;
let Q2Fill = 255;
let Q3Fill = 255;
let Q4Fill = 255;

function mouseCorner(x,y){ //if mouse divi something (so in a certain quad) set corner to a number
  if (x <= windowWidth/2 && y <= windowHeight/2){
    corner = 1;
  }
  else if (x >= windowWidth/2 && y <= windowHeight/2){
    corner = 2;
  }
  else if (x <= windowWidth/2 && y >= windowHeight/2){
    corner = 3;
  }
  else{
    corner = 4;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  fill(255);
  rect(0, 0, width/2,height/2);
  rect(width/2,0,width/2,height/2);
  rect(0,height/2,width/2,height/2);
  rect(width/2,height/2,width/2,height/2);
  mouseCorner(mouseX,mouseY);
  if (corner === 1){
    Q1Fill = 0;
    rect(0, 0, width/2,height/2);
  }
  else Q1Fill += 10;
  if (corner === 2){
    fill(0);
    rect(width/2,0,width/2,height/2);
  }
  else Q2Fill += 10;
  if (corner === 3){
    Q3Fill = 0;
    rect(0,height/2,width/2,height/2);
  }
  else Q3Fill += 10;
  if (corner === 4) {
    Q4Fill = 0;
    rect(width/2,height/2,width/2,height/2);
  }
  else Q4Fill += 10;
}
 









//if (x <= windowWidth/2 && y <= windowHeight/2){
//  corner === 1;
//}
//else{
//  fill(0, FADE_SPEED);
//}