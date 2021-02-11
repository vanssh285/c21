var fixedRect, movingRect;
var rect1,rect2
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect1=createSprite(200,400,50,50)
  rect2=createSprite(900,500,40,40)
  rect1.shapeColor = "yellow";
  rect2.shapeColor = "yellow";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){

    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
    
  }
  else if (isTouching(movingRect,rect1)){

    movingRect.shapeColor = "red";
    rect1.shapeColor = "red";

  }
  else if (isTouching(movingRect,rect2)){
    movingRect.shapeColor = "orange";
    rect2.shapeColor = "orange";
  }

  else{
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
    rect1.shapeColor = "pink";
    rect2.shapeColor = "pink";
  }
  

  drawSprites();
}


function isTouching(object1, object2){

  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {

      return true;

    
  }
  else {

    return false;
  
  }

}