// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let  r = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 200, 0);
  fill(r,0,0);
  print(frameCount);
  ellipse(mouseX,mouseY, 200, 40);

}
function mousePressed(){
  if (r === 0){
    r === 255;
  }
  else{
    r = 0;
  }


}
