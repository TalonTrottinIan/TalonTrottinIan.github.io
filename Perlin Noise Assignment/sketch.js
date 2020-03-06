// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let x = 0;
let tTime;

function setup() {
  createCanvas(windowWidth, windowHeight);
  tTime = random(100);
  background(220);
  rectMode(CORNERS);
  x = 1;
  stroke(random(255),random(255),random(255));
  generateTerrain();
}

function draw() {
}


function generateTerrain(){
  for(let i = 0; i < width; i += 1){
    rect(i,height,i+x,map(noise(tTime),0,1,0,height));
    tTime += 0.01;
    // x += 20;
  }
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    background(220);
    stroke(random(255),random(255),random(255));
    fill(random(255),random(255),random(255));
    generateTerrain();
  }
  else if (keyCode === RIGHT_ARROW){
    background(220);
    x += 5;
    //stroke(random(255),random(255),random(255));
    //fill(random(255),random(255),random(255));
    generateTerrain();
  }
  else if(keyCode === LEFT_ARROW){
    background(220);
    x -= 5;
    //stroke(random(255),random(255),random(255));
    //(random(255),random(255),random(255));
    generateTerrain();
  }
}