//Black and White Target
//we define the size of the circle and number of circles we draw.
let MAX_CIRCLE = 400;
let NUMS_CIRCLE = 10;
let swirl = MAX_CIRCLE;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

//We keep the proper sizing for circles and repetively draw them.

function draw() {
  swirl = 400;
  background(240);
  drawSwirl();
}

//this function decreases the size of the circle being drawn each time.

function drawSwirl(){
  for(let i = 0; i < NUMS_CIRCLE; i ++){
    ellipse(200,200,swirl,swirl);
    swirl -= MAX_CIRCLE / NUMS_CIRCLE;

  }
}