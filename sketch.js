var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var r;
 var cloud;
 var obstacle;
function preload() {
    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
    trex_collided = loadImage("trex_collided.png");
    groundImage = loadImage("ground2.png");
    cloudimg= loadImage("cloud.png");
    obsimg1= loadImage("obstacle1.png");
    obsimg2=loadImage("obstacle2.png");
    obsimg3=loadImage("obstacle3.png");
    obsimg4=loadImage("obstacle4.png");
    obsimg5=loadImage("obstacle5.png");
    obsimg6=loadImage("obstacle6.png");
   

}
function setup() {
    createCanvas(600, 200);
    //create a trex sprite
    trex = createSprite(50,160,20,50);
    trex.addAnimation("running", trex_running);
    trex.scale = 0.5;
    //create a ground sprite
    ground = createSprite(200,180,400,20);
    ground.addImage("ground",groundImage);
    ground.x = ground.width /2;
    ground.velocityX = -6;
    invisibleGround=createSprite(200,200,400,20);
    invisibleGround.visible=false;
    console.log("hello"+5);
//r=random number
   /*r=Math.round(random(5,20))
   console.log(r);*/
    
}
function draw() {
    background(255);
    //jump when the space button is pressed
    if (keyDown("space")&& trex.y>=150 ) {
    trex.velocityY = -10;
    }
    trex.velocityY = trex.velocityY + 0.8
    if (ground.x < 0) {
    ground.x = ground.width / 2;
    }
    //trex.collide(ground);
    trex.collide(invisibleGround);
   // console.log(trex.y);
    spawnclouds();
    obs();
    drawSprites();
   }
   function spawnclouds(){
       if(frameCount % 120===0){
cloud=createSprite(600,100,40,10);
cloud.addImage(cloudimg);
cloud.scale=0.2;
cloud.y=Math.round(random(10,60));
cloud.velocityX=-3;
cloud.lifetime=250;
// console.log(trex.depth);
// console.log(cloud.depth);
cloud.depth=trex.depth;
trex.depth=trex.depth+1;
   }
   }
function obs(){
    if (frameCount%60===0){

    
 obstacle= createSprite(400,165,10,40);
obstacle.velocity=-6;

//cactus repitation
ran=Math.round(random(1,6));
switch(ran){
    case 1:
        obstacle.addImage(obsimg1);
        break;

        case 2:
        obstacle.addImage(obsimg2);
        break;

        case 3:
        obstacle.addImage(obsimg3);
        break;

        case 4:
        obstacle.addImage(obsimg4);
        break;

        case 5:
        obstacle.addImage(obsimg5);
        break;

        case 6:
        obstacle.addImage(obsimg6);
        break;
default:break;
   
}
obstacle.scale=0.5;
obstacle.lifetime=300;
    }
}