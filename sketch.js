var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var obstacle1,obstacle2,obstacle3,obastacle4,obstacle5,
 obstacle6;
var cloud,score;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  obstacle1=loadImage("obstacle1.png");
  obstacle2=loadImage("obstacle2.png");
  obstacle3=loadImage("obstacle3.png");
  obstacle4=loadImage("obstacle4.png");
  obstacle5=loadImage("obstacle5.png");
  obstacle6=loadImage("obstacle6.png");

  cloud=loadImage(cloud.png);




}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  obsticalegroup= new Group();
  cloudgroup=new Group();
  
}

function draw() {
  background(220);
  score=score+ Math.round(getframeRate()/60);
   text("Score: "+ score, 500, 50);
  
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
 spawnobstacle();
 spawncloud();
  drawSprites();
}
function spawncloud(){
  if (frameCount % 60 === 0) {
    var cloud = createSprite(600,120,40,10);
    cloud.y =Math.round(random(80,120));
    cloud.addImage(cloud);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    cloud.lifetime = 134;
    
   
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    cloudgroup.add(cloud);
  }
}
function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -6;
    
    var rand =Math.round(random(1,6));
    switch(rand){
      case 1:obstacle.addImage(obstacle1);
      break;
      case 2:obstacle.addImage(obstacle2);
      break;
      case 3:obstacle.addImage(obstacle3);
      case 4:obstacle.addImage(obstacle4);
      break;
      case 5:obstacle.addImage(obstacle5);
      break;
      case 6:obstacle.addImage(obstacle6);
      break;
    }
    
              
    obstacle.scale = 0.5;
    obstacle.lifetime = 70;
    obstaclegroup.add(obstacle);
  }
}