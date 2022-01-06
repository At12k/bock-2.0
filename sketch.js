var box;
var wall
function setup() {
  createCanvas(400,400);
  box=createSprite(20,20,20,20);
  wall=createSprite(200,150,285,5);
  wall=createSprite(175,250,350,5);
  wall=createSprite(60,60,5,180);
  wall=createSprite(345,65,5,180);
  wall=createSprite(380,250,60,5);
}

function draw() 
{
  background(200);
  if(keyIsDown(RIGHT_ARROW)){
    box.position.x+=5
  }
  if(keyIsDown(LEFT_ARROW)){
    box.position.x-=5
  }
  if(keyIsDown(UP_ARROW)){
    box.position.y-=5
  }
  if(keyIsDown(DOWN_ARROW)){
    box.position.y+=5
  }
  if(box.isTouching(wall)){
    box.x=(100,200);
  }
drawSprites();
}
