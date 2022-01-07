var garden,rabbit,apple,orangeL,redL,appleGroup,redLGroup,orangLGroup
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}


function setup(){
  
  createCanvas(400,400);
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

appleGroup= new Group()
orangLGroup= new Group()
redLGroup= new Group()
}

function draw() {
  background(0);
  
  // boy moving on Xaxis with mouse'
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges[1]);
  rabbit.collide(edges[0]);

spawnapples()
spawnorangL()
spawnredL()
drawSprites();
}

function spawnapples() {
if(frameCount%60===0){
  apple = createSprite(50,40,10,10);
  apple.addImage("apple",appleImg);
  apple.scale=0.07;
  apple.velocityY = 3;
  apple.x=Math.round(random(100,320));
  apple.lifetime = 134;
  appleGroup.add(apple);
}

  
}

function spawnorangL() {
if(frameCount%60===0){
  orangeL = createSprite(50,40,10,10);
  orangeL.addImage("orangeLeaf",orangeImg);
  orangeL.scale=0.1;
  orangeL.velocityY = 3;
  orangeL.x=Math.round(random(120,250));
  orangeL.lifetime = 134;
  orangLGroup.add(orangeL);
}

}

function spawnredL() {
  if(frameCount%60===0){
    redL = createSprite(50,40,10,10);
    redL.addImage("redLeaf",redImg);
    redL.scale=0.06;
      redL.velocityY = 3;
      redL.x=Math.round(random(50,350));
      redL.lifetime = 134;
      redLGroup.add(redL);
  }

}
