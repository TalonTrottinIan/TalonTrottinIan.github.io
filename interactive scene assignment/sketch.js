// Interactive Scene
// Ian Fuchs
// 2/6/2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x,y;
//let currentBack = (i = 0, i <=3, i++);

//if mouseIsPressed(){
//  return currentBack(i++);
//}

function setup() {
  createCanvas(windowWidth, windowHeight);
  let x = width/2;
  let y = height/2;
}


function draw() {
  background(40);
  character(mouseX,mouseY);
  background1();
  screentext(); 
  
  
}




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

function background1(){
  strokeWeight(4);
  
  fill(255,200,200);

  circle(1500,0,600);
  
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