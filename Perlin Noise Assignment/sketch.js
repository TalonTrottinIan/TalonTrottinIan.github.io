// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let rectChange = 0;
let tTime;
let tallest;
let randomHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  tTime = random(100);
  randomHeight = map(noise(tTime),0,1,0,height);
  background(220);
  rectMode(CORNERS);
  rectChange = 1;
  stroke(random(255),random(255),random(255));
  generateTerrain();
}

function draw() {    
}



function generateTerrain(){
  for(let i = 0; i < width; i += rectChange){
    rect(i,height,i+rectChange,randomHeight);
    tallest = randomHeight;
    tTime += 0.01;
    randomHeight = map(noise(tTime),0,1,0,height);
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
    rectChange += 5;
    stroke(random(255),random(255),random(255));
    fill(random(255),random(255),random(255));
    generateTerrain();
  }
  else if(keyCode === LEFT_ARROW){
    if(rectChange > 1){
      background(220);
      rectChange -= 5;
      stroke(random(255),random(255),random(255));
      fill(random(255),random(255),random(255));
      generateTerrain();
    }
    else{
      background(220);
      rectChange -= 0;
      stroke(random(255),random(255),random(255));
      fill(random(255),random(255),random(255));
      generateTerrain();
    }
  }
}

function drawFlag(){


}