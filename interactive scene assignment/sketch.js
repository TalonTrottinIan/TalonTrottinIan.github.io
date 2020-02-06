// Interactive Scene
// Ian Fuchs
// 2/6/2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x,y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let x = width/2;
  let y = height/2;
}

function draw() {
  background(100,150,50);
  character(mouseX,mouseY);

}

function character (x,y){
  //head
  fill(100);
  strokeWeight(1);
  ellipse(x, y, 100, [75]); //base head
  fill (0,0,200);
  strokeWeight(2);
  circle(x-20,y-10,25); //two eyes
  circle(x+20,y-10,25);
  fill(255);
  strokeWeight(4);
  line(x-15, y+10, x+15,y-10);
  //body


  

}