// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



// This example is adapted from Learning Processing Example 5-3 by Daniel Shiffman
// http://www.learningprocessing.com
// Refactor the following code. Be sure the refactored version:
//  - is readable
//  - is able to work easily with any canvas size

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //we start by setting the stroke to 0 for black lines, and make our 2 centre lines.
  background(255);
  stroke(0);
  line(width/2, 0, width/2, height);
  line(0, height/2, width, height/2);
  noStroke();
  fill(0);
  //this section draws out each quadrant
  if (mouseX < width/2 && mouseY < height/2){
    rect(0, 0, width/2, height/2);
  }
  else if (mouseX > width/2 && mouseY < height/2) {
    rect(width/2, 0, width/2, height/2);
  }
  else if (mouseX < width/2 && mouseY > height/2) {
    rect(0, height/2, width/2, height/2);
  }
  else if (mouseX > width/2 && mouseY > height/2) {
    rect(width/2, height/2, width/2, height/2);
  }
}
