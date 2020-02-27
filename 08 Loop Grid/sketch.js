// Loop Grid
let gridSpacing = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  circleGrid();
}

function mouseClicked(){
  circleGrid();
}

function circleGrid() {
  for (let x = gridSpacing/2; x < width; x += gridSpacing) {
    for (let y = gridSpacing/2; y < height; y += gridSpacing) {
      let size = random(gridSpacing*0.2,gridSpacing*2);
      //fill(random(255),random(255),random(255));
      stroke(random(255),random(255),random(255));
      ellipse(x, y, size, size);
    }
  }
}

function draw() {
  
}
