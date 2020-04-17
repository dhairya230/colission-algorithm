var fixedRect,movingRect;

function setup() {
  createCanvas(1000,800);
  fixedRect=createSprite(200,200,20,50);
  movingRect=createSprite(400,400,20,50);
  movingRect.shapeColor="blue";
  fixedRect.shapeColor="blue";

}

function draw() {
 

  background("black");  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2&&
    movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2&&
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }else{
    movingRect.shapeColor="blue";
  fixedRect.shapeColor="blue";
  
  }
  drawSprites();
}