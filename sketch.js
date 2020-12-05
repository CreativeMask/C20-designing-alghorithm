var tall;
var short;

function setup() {
  createCanvas(1536,720);
  tall = createSprite(400, 200, 50, 80);
  tall.shapeColor = "green";
  short =  createSprite(800, 200, 80, 50);
  short.shapeColor = "yellow";
}

function draw() {
  background("black");
  short.x = World.mouseX;
  short.y = World.mouseY;

  if(short.x - tall.x < tall.width/2 + short.width/2 && tall.x - short.x < tall.width/2 + short.width/2 && 
    short.y - tall.y < tall.width/2 + short.width/2 && tall.y - short.y < tall.width/2 + short.width/2){
    short.shapeColor = "red";
    tall.shapeColor = "red";
  } else {
    short.shapeColor = "yellow";
    tall.shapeColor = "green";
  }

  drawSprites();
}