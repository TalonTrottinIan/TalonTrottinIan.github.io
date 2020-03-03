// This example is adapted from Learning Processing Example 5-3 by Daniel Shiffman
// http://www.learningprocessing.com
// Refactor the following code. Be sure the refactored version:
//  - is readable
//  - is able to work easily with any canvas size

function setup() {
  createCanvas(width, height);
}
function draw() {
  background(255); stroke(0); line(0, 0, width/2, height/2); line(0, height/2, width/2, height/2);
  noStroke(); fill(0);
  if (mouseX < width/2 && mouseY < height/2) { 
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
