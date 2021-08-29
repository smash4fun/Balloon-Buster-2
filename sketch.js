var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var RedB_group
var GreenB_group 
var BlueB_group
var PinkB_group
var score=0;
var Arrows_group

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
RedB_group = createGroup()
GreenB_group = createGroup()
BlueB_group = createGroup()
PinkB_group = createGroup()
Arrows_group = createGroup()

   score = 0    
}


   
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }  
    
  drawSprites();
  text("Score: "+ score, 300,50);



// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  RedB_group.add(red)
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  BlueB_group.add(blue)
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  GreenB_group.add(cloud)
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1
  PinkB_group.add(cloud)
}
function draw() {
  background(0);
   // moving ground
     scene.velocityX = -3 
 
     if (scene.x < 0){
       scene.x = scene.width/2;
     }
   
   //moving bow
   bow.y = World.mouseY
   
    // release arrow when space key is pressed
   if (keyDown("space")) {
     createArrow();
   }
if(Arrows_group.isTouching(RedB_group)){
  RedB_group.destroyEach()
  Arrows_group.destroyEach()
  score = score+1
}
if(Arrows_group.isTouching(GreenB_group)){
  GreenB_group.destroyEach()
  Arrows_group.destroyEach()
  score = score+1
}
if(Arrows_group.isTouching(BlueB_group)){
  BlueB_group.destroyEach()
  Arrows_group.destroyEach()
  score = score+1
}
if(Arrows_group.isTouching(PinkB_group)){
  PinkB_group.destroyEach()
  Arrows_group.destroyEach()
  score = score+1
}

  
  }