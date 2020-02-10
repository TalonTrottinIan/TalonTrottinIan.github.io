// Interactive Scene
// Ian Fuchs
// 2/6/2020
//
// Extra for Experts:
// - i made a horroe scene featuring a soulless character 
// - with changing backgound colours. read comments for keys to press. 

let x,y;
let currentBack = 0;

function keyTyped(){ //thus function sets up the change to background colours
  if(key === "a"){ //links a colour to a
    currentBack = 0;
  }
  else if(key === "s"){ //links a colour to s
    currentBack = 1;
  }
  else if(key === "d"){ //links a colour to d
    currentBack = 2;
  }
  else {
    currentBack = 3; //links a colour to any other key
  }

}



function setup() {
  createCanvas(windowWidth, windowHeight);
  let x = width/2;
  let y = height/2;
}


function draw() {
  // this if statement decides backgound colours for the key presses
  if (currentBack === 0){
    background(51, 51, 26);
  }
  else if(currentBack === 1){
    background(128, 26, 0);
  }
  else if(currentBack === 2){
    background(0, 77, 0);
  }
  else{
    background(77, 0, 77);
  }

  character(mouseX,mouseY);
  //calling backgound objects and text here
  background1();
  screentext(); 
  
  
}



//this function draws the character, which is drawn here to hide it behind objects
function character (x,y){

  //hugging arms
  strokeWeight(6); 
  fill(255);
  line(x-100,y+50,x+100,y+50);

  //body
  rectMode(CENTER);
  fill(100,50,0);
  strokeWeight(2);
  rect(x,y+50,30,100);

  //head
  fill(100);
  strokeWeight(1);
  ellipse(x, y, 100, [75]); //base head
  fill (255,255,255);
  strokeWeight(2);
  circle(x-20,y-10,25); //two eyes
  circle(x+20,y-10,25);
  fill(255);
  strokeWeight(4); //mouth
  line(x-15, y+10, x+15,y+10);
  
  



  

}

//this function sets up the background objects
function background1(){

  //moon drawing? Mostly just a circle
  strokeWeight(4);
  
  fill(255,200,200);

  circle(1500,0,600);
  
  // house drawing
  fill(0,0,100);
  rectMode(CORNER);
  rect(600,500,300,200);
  fill(100,100,0);

  triangle(550, 500, 950, 500, 750, 350);
  fill(150,0,100);

}

function screentext(){ //text for the bottom right corner
  fill(255);
  textSize(50);
  text("Ian Fuchs", 1200, 700);
  text("He's coming...",1200,750);
}