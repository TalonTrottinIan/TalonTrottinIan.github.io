// Loop Grid
let gridSpacing = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  rectGrid();
}

function mouseClicked(LEFT){
  if (keyIsDown(SHIFT)){
    gridSpacing += 5;
    rectGrid();
  }
  else{
    gridSpacing -= 2;
    rectGrid();
  }
}

function rectGrid() {
  for (let x = 0; x < width; x += gridSpacing) {
    for (let y = 0; y < height; y += gridSpacing) {
      //let size = random(gridSpacing*0.2,gridSpacing*2);
      fill(random(160,180),random(20,40),random(50,70));
      rect(x, y, gridSpacing,gridSpacing);
    }
  }
}

function draw() {
  
}
