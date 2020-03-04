let a, b, x_speed, y_speed;
function setup() {
  createCanvas(windowWidth, windowHeight);
  a = 200;
  b = 300;
  //these variables determine the speed on the x and y axis.
  x_speed = random(3, 8); 
  y_speed = random(3, 8);
}

function draw() {
  corners();
  background(80, 80, 80);
  rect(a, b, 250, 75);
}

//this function lets the rectangle bounce off the sides of the screen.
function corners() {
  a += x_speed; b += y_speed;
  if (b >= height - 75 || b <= 0) {
    y_speed = y_speed * -1; 
  }
  if (a >= width - 250 || a <= 0) {
    x_speed = x_speed * -1; 
  }
}

