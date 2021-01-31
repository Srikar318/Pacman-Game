var foodGroup

var gameState = "play";
var score = 0;

function preload(){

PacmanImage = loadImage("Photos/Pacman.png");
Ghost1Image = loadImage("Photos/Ghost1.png");
Ghost2Image = loadImage("Photos/Ghost2.png");
Ghost3Image = loadImage("Photos/Ghost3.png");
Ghost4Image = loadImage("Photos/Ghost4.png");
DonutImage = loadImage("Photos/Donut.png");

}

function setup() {
  createCanvas(windowWidth,windowHeight);

  

  Pacman = createSprite(windowWidth/2 , windowHeight/2 +150, 20, 20);
  Pacman.addImage("Pacman",PacmanImage);
  Pacman.scale = 0.1;

  border1 = createSprite(767.5,0,700,10);
  border1.shapeColor =  "red";
  border2 = createSprite(767.5,752,700,10);
  border2.shapeColor = "red";
  border3 = createSprite(1115.5,376,10,752);
  border3.shapeColor = "red";
  border4 = createSprite(419.5,376,10,752);
  border4.shapeColor = "red";

  center1 = createSprite(windowWidth/2 + 100, windowHeight/2, 10,150);
  center2 = createSprite(windowWidth/2 - 100, windowHeight/2, 10,150);
  center3 = createSprite(windowWidth/2, windowHeight/2 + 80, 200,10);
  center4 = createSprite(windowWidth/2 + 80, windowHeight/2 -80, 50,10);
  center5 = createSprite(windowWidth/2 - 80, windowHeight/2 -80, 50,10);
  
  center1.shapeColor = "red";
  center2.shapeColor = "red";
  center3.shapeColor = "red";
  center4.shapeColor = "red";
  center5.shapeColor = "red";

  Line1 = createSprite(windowWidth/2,windowHeight/2 - 200, 300, 25);
  Line2 = createSprite(windowWidth/2,windowHeight/2 + 200, 300, 25);

  Line3 = createSprite(windowWidth/2 + 250,windowHeight/2 - 200, 25, 200);
  Line4 = createSprite(windowWidth/2 - 250,windowHeight/2 - 200, 25, 200);

  Line5 = createSprite(windowWidth/2 - 250,windowHeight/2 + 200, 25, 200);
  Line6 = createSprite(windowWidth/2 + 250,windowHeight/2 + 200, 25, 200);

  Line1.shapeColor = "cyan";
  Line2.shapeColor = "cyan";
  Line3.shapeColor = "cyan";
  Line4.shapeColor = "cyan";
  Line5.shapeColor = "cyan";
  Line6.shapeColor = "cyan";

  Ghost1 = createSprite(720,330,10,10);
  Ghost1.addImage("Ghost1",Ghost1Image);
  Ghost1.scale = 0.3;
  Ghost1.velocityX = 2;
  Ghost1.velocityY = 4;

  Ghost2 = createSprite(794,330,10,10);
  Ghost2.addImage("Ghost2",Ghost2Image);
  Ghost2.scale = 0.3;
  Ghost2.velocityX = -2;
  Ghost2.velocityY = -4;

  Ghost3 = createSprite(712,423,10,10);
  Ghost3.addImage("Ghost3",Ghost3Image);
  Ghost3.scale = 0.3;
  Ghost3.velocityX = 2;
  Ghost3.velocityY = -4;

  Ghost4 = createSprite(796,423,10,10);
  Ghost4.addImage("Ghost4",Ghost4Image);
  Ghost4.scale = 0.3;
  Ghost4.velocityX = -2.5;
  Ghost4.velocityY = 5;

  foodGroup = new Group();

  for(var i = 0; i < 752; i = i + 50){

    var Donut = createSprite(955, 25 + i);
    Donut.addImage("Donut",DonutImage);
    Donut.scale = 0.05;
    foodGroup.add(Donut);

  }

  for(var i = 0; i < 752; i = i + 50){

    var Donut1 = createSprite(565, 25 + i);
    Donut1.addImage("Donut1",DonutImage);
    Donut1.scale = 0.05;
    foodGroup.add(Donut1);  

  }

  for(var i = 0; i < 752; i = i + 50){

    var Donut2 = createSprite(1065, 25 + i);
    Donut2.addImage("Donut2",DonutImage);
    Donut2.scale = 0.05;
    foodGroup.add(Donut2);

  }

  for(var i = 0; i < 752; i = i + 50){

    var Donut3 = createSprite(465, 25 + i);
    Donut3.addImage("Donut3",DonutImage);
    Donut3.scale = 0.05;
    foodGroup.add(Donut3);

  }

  for(var i = 0; i < 301; i = i + 50){

    var Donut4 = createSprite(610 + i , 90);
    Donut4.addImage("Donut4",DonutImage);
    Donut4.scale = 0.05;
    foodGroup.add(Donut4);

  }

  for(var i = 0; i < 301; i = i + 50){

    var Donut5 = createSprite(610 + i , 240);
    Donut5.addImage("Donut5",DonutImage);
    Donut5.scale = 0.05;
    foodGroup.add(Donut5);

  }

  for(var i = 0; i < 301; i = i + 50){

    var Donut6 = createSprite(610 + i , 520);
    Donut6.addImage("Donut6",DonutImage);
    Donut6.scale = 0.05;
    foodGroup.add(Donut6);

  }

  for(var i = 0; i < 301; i = i + 50){

    var Donut7 = createSprite(610 + i , 645);
    Donut7.addImage("Donut7",DonutImage);
    Donut7.scale = 0.05;
    foodGroup.add(Donut7);

  }

}

function draw() {
  background("black");  
  drawSprites();

  fill("cyan");
  textSize(60);
  textFont("TimesNewRoman");
  stroke("Red");
  strokeWeight(4);
  text("Pacman", 150, 100);

  //text("x:" +mouseX, 100, 200);
  //text("y:" +mouseY, 100, 230);

  textSize(25);
  stroke("Black");
  strokeWeight(10);
  fill("pink");
  text("Score : " + score, 1310, 200);

  if(gameState === "play"){

  Ghost1.bounceOff(border1);
  Ghost1.bounceOff(border2);
  Ghost1.bounceOff(border3);
  Ghost1.bounceOff(border4);
  
  Ghost2.bounceOff(border1);
  Ghost2.bounceOff(border2);
  Ghost2.bounceOff(border3);
  Ghost2.bounceOff(border4);
 
  Ghost3.bounceOff(border1);
  Ghost3.bounceOff(border2);
  Ghost3.bounceOff(border3);
  Ghost3.bounceOff(border4);
  
  Ghost4.bounceOff(border1);
  Ghost4.bounceOff(border2);
  Ghost4.bounceOff(border3);
  Ghost4.bounceOff(border4);

  Ghost1.bounceOff(center1);
  Ghost1.bounceOff(center2);
  Ghost1.bounceOff(center3);
  Ghost1.bounceOff(center4);
  Ghost1.bounceOff(center5);

  Ghost2.bounceOff(center1);
  Ghost2.bounceOff(center2);
  Ghost2.bounceOff(center3);
  Ghost2.bounceOff(center4);
  Ghost2.bounceOff(center5);

  Ghost3.bounceOff(center1);
  Ghost3.bounceOff(center2);
  Ghost3.bounceOff(center3);
  Ghost3.bounceOff(center4);
  Ghost3.bounceOff(center5);

  Ghost4.bounceOff(center1);
  Ghost4.bounceOff(center2);
  Ghost4.bounceOff(center3);
  Ghost4.bounceOff(center4);
  Ghost4.bounceOff(center5);

  Ghost1.bounceOff(Line1);
  Ghost2.bounceOff(Line1);
  Ghost3.bounceOff(Line1);
  Ghost4.bounceOff(Line1);

  Ghost1.bounceOff(Line2);
  Ghost2.bounceOff(Line2);
  Ghost3.bounceOff(Line2);
  Ghost4.bounceOff(Line2);

  Ghost1.bounceOff(Line3);
  Ghost2.bounceOff(Line3);
  Ghost3.bounceOff(Line3);
  Ghost4.bounceOff(Line3);

  Ghost1.bounceOff(Line4);
  Ghost2.bounceOff(Line4);
  Ghost3.bounceOff(Line4);
  Ghost4.bounceOff(Line4);

  Ghost1.bounceOff(Line5);
  Ghost2.bounceOff(Line5);
  Ghost3.bounceOff(Line5);
  Ghost4.bounceOff(Line5);

  Ghost1.bounceOff(Line6);
  Ghost2.bounceOff(Line6);
  Ghost3.bounceOff(Line6);
  Ghost4.bounceOff(Line6);

  Pacman.bounceOff(border1);
  Pacman.bounceOff(border2);
  Pacman.bounceOff(border3);
  Pacman.bounceOff(border4);

  Pacman.bounceOff(Line1);
  Pacman.bounceOff(Line2);
  Pacman.bounceOff(Line3);
  Pacman.bounceOff(Line4);
  Pacman.bounceOff(Line5);
  Pacman.bounceOff(Line6);

  Pacman.bounceOff(center1);
  Pacman.bounceOff(center2);
  Pacman.bounceOff(center3);
  Pacman.bounceOff(center4);
  Pacman.bounceOff(center5);

  movement();

  for( i = 0; i < foodGroup.length; i++ ){

if(foodGroup.get(i).isTouching(Pacman)){

  foodGroup.get(i).remove();
  score = score + 10;

}
  console.log(foodGroup.length);
  }

  if(Pacman.isTouching(Ghost1) || Pacman.isTouching(Ghost2) || Pacman.isTouching(Ghost3) || Pacman.isTouching(Ghost4)){
    gameState = "End";
  }

  if(score > 879){

    console.log(foodGroup.length);
    text("YOU WIN", windowWidth/2 - 70, windowHeight/2);
    gameState = "WIN";

  }

  }

else if(gameState === "End"){

  Pacman.velocityX = 0;
  Pacman.velocityY = 0;

  Ghost1.velocityX = 0;
  Ghost1.velocityY = 0;

  Ghost2.velocityX = 0;
  Ghost2.velocityY = 0;

  Ghost3.velocityX = 0;
  Ghost3.velocityY = 0;

  Ghost4.velocityX = 0;
  Ghost4.velocityY = 0;

  text("Game Over",windowWidth/2 - 70, windowHeight/2);
  text("YOU LOSE",windowWidth/2 - 69, windowHeight/2 + 30);

}

  else if(gameState === "WIN"){

    Pacman.velocityX = 0;
    Pacman.velocityY = 0;
  
    Ghost1.velocityX = 0;
    Ghost1.velocityY = 0;
  
    Ghost2.velocityX = 0;
    Ghost2.velocityY = 0;
  
    Ghost3.velocityX = 0;
    Ghost3.velocityY = 0;
  
    Ghost4.velocityX = 0;
    Ghost4.velocityY = 0;
  
    text("YOU WIN",windowWidth/2 - 68, windowHeight/2);
  }

}

function movement(){

if(keyDown(UP_ARROW)){
Pacman.setSpeedAndDirection(4,-90);
Pacman.rotation = -90;
}

if(keyDown(DOWN_ARROW)){
Pacman.setSpeedAndDirection(4,90);
Pacman.rotation = 90;
}

if(keyDown(LEFT_ARROW)){
Pacman.setSpeedAndDirection(4,180);
Pacman.rotation = 180;
}

if(keyDown(RIGHT_ARROW)){
 Pacman.setSpeedAndDirection(4,0);
 Pacman.rotation = 0;
}
    
  
}