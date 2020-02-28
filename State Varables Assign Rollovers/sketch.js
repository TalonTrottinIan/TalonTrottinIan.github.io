// State Variables: Rollovers
// Ian Fuchs
// Feb 12 2020

//setting corner variables, and variables for fading. The Fade Speed is also set below.
let corner = 0;
let x,y;
const FADE_SPEED = 20;

let corner1, corner2, corner3, corner4;
let Q1Fill, Q2Fill, Q3Fill, Q4Fill;

// The below function connects a corner to a fill, and lets it fade when the mouse leaves the quadrant.
function mouseCorner(x,y){ 
  if (x <= windowWidth/2 && y <= windowHeight/2){
    corner = 1;
    Q1Fill = 0;
    Q2Fill += FADE_SPEED;
    Q3Fill += FADE_SPEED;
    Q4Fill += FADE_SPEED;
  }
  else if (x >= windowWidth/2 && y <= windowHeight/2){
    corner = 2;
    Q1Fill += FADE_SPEED;
    Q2Fill = 0;
    Q3Fill += FADE_SPEED;
    Q4Fill += FADE_SPEED;
  }
  else if (x <= windowWidth/2 && y >= windowHeight/2){
    corner = 3;
    Q1Fill += FADE_SPEED;
    Q2Fill += FADE_SPEED;
    Q3Fill = 0;
    Q4Fill += FADE_SPEED;
  }
  else{
    corner = 4;
    Q1Fill += FADE_SPEED;
    Q2Fill += FADE_SPEED;
    Q3Fill += FADE_SPEED;
    Q4Fill = 0;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //This draws all of the initial rectangles.
  background(255);
  fill(255);
  rect(0, 0, width/2,height/2);
  rect(width/2,0,width/2,height/2);
  rect(0,height/2,width/2,height/2);
  rect(width/2,height/2,width/2,height/2);
  mouseCorner(mouseX,mouseY);

  // This fills each corner to black when the mouse is over an area.
  fill(Q1Fill);
  rect(0, 0, width/2,height/2);

  fill(Q2Fill);
  rect(width/2,0,width/2,height/2);

  fill(Q3Fill);
  rect(0,height/2,width/2,height/2);

  fill(Q4Fill);
  rect(width/2,height/2,width/2,height/2);

}