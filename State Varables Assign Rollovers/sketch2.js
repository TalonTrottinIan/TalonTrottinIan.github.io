// State Variables: Rollovers
// Ian Fuchs
// Feb 12 2020
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let corner = 0;
let x,y;
const FADE_SPEED = 3;

let corner1, corner2, corner3, corner4;
let Q1Fill, Q2Fill, Q3Fill, Q4Fill;

function mouseCorner(x,y){ //if mouse divi something (so in a certain quad) set corner to a number
  if (x <= windowWidth/2 && y <= windowHeight/2){
    corner = 1;
    Q1Fill(0);
    Q2Fill += FADE_SPEED;
    Q3Fill += FADE_SPEED;
    Q4Fill += FADE_SPEED;
  }
  else if (x >= windowWidth/2 && y <= windowHeight/2){
    corner = 2;
    Q1Fill += FADE_SPEED;
    Q2Fill(0);
    Q3Fill += FADE_SPEED;
    Q4Fill += FADE_SPEED;
  }
  else if (x <= windowWidth/2 && y >= windowHeight/2){
    corner = 3;
    Q1Fill += FADE_SPEED;
    Q2Fill += FADE_SPEED;
    Q3Fill(0);
    Q4Fill += FADE_SPEED;
  }
  else{
    corner = 4;
    Q1Fill += FADE_SPEED;
    Q2Fill += FADE_SPEED;
    Q3Fill += FADE_SPEED;
    Q4Fill(0);
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
//  if (corner === 1){
fill(Q1Fill);
rect(0, 0, width/2,height/2);
//  }
//  if (corner === 2){
fill(Q2Fill);
rect(width/2,0,width/2,height/2);
//  }
//  if (corner === 3){
fill(Q3Fill);
rect(0,height/2,width/2,height/2);
//  }
//  if (corner === 4) {
fill(Q4Fill);
rect(width/2,height/2,width/2,height/2);
//  }
}
 









//if (x <= windowWidth/2 && y <= windowHeight/2){
//  corner === 1;
//}
//else{
//  fill(0, FADE_SPEED);
//}