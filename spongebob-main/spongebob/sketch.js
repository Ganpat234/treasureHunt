var bg;
var person;
var detector;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10
function preload(){
  bg = loadImage("images/beach2.jpeg")

}


function setup()

 {
    createCanvas(displayWidth,displayHeight);

    person=createSprite(100,650,50,50)
    detector=createSprite(20,20)
    person.shapeColor="red"
    detector.shapeColor="blue"
    block1=createSprite(500, 600, 200, 25)

    
}

function draw() 
{
  background(bg); 

  if(keyDown("UP")){
     person.y=person.y-2
  }
  if(keyDown("DOWN")){
    person.y=person.y+2
 }
 if(keyDown("LEFT")){
  person.x=person.x-2
}
if(keyDown("RIGHT")){
  person.x=person.x+2
}
  
  detector.x=person.x-50
  detector.y=person.y-10
  
 
  
  drawSprites()
}

 
