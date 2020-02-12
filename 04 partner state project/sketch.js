// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = 0;
let y = 0;

let state = 0;



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  rect(x,y,40,40);
  if (state === 0){
    x +=1;
    if (x = windowWidth -40, state ===1)
  }
  else if (x <= windowWidth - 40 && y >= 0){
    y +=1;
  }
  else if (x >= windowWidth - 40 && y <= windowHeight - 40 ){
    x -=1;
  }
  else{
    y -=1;
  }
}
