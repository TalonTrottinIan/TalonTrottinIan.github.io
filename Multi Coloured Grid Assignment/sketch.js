// Multi Coloured Grid
// Ian Fuchs
// Feb.28/20

let gridSpacing = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  rectGrid();
}

// This function makes it so a left click shrinks the grid, and a shift click makes it grow.

function mouseClicked(LEFT) {
  if (keyIsDown(SHIFT)) { //shift is the key, when held with left click, to make it grow.
    gridSpacing += 5;
    rectGrid();
  }
  else { // a normal left click shrinks with this
    if (gridSpacing > 10) {
      gridSpacing -= 5;
      rectGrid();
    }
    else {
      rectGrid();
    }
  }
}

// this function makes the up arrow do a full reset, and the down arrow reset the colours, but not the size.

function keyPressed() {
  if (keyCode === UP_ARROW) {
    gridSpacing = 50;
    rectGrid();
  }
  else if (keyCode === DOWN_ARROW) {
    rectGrid();
  }
}

// this is the main function that gets called to draw all squares.

function rectGrid() {
  for (let x = 0; x < width; x += gridSpacing) {
    for (let y = 0; y < height; y += gridSpacing) {
      fill(random(160, 180), random(10, 40), random(20, 50)); // this line makes the colour selection not completely random and instead in a selected range.
      rect(x, y, gridSpacing, gridSpacing);
    }
  }
}