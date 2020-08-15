var monkey, monkey_running, mokey_collided;
var ground, invisibleground, groundImage;

function preload(){
  monkey_running =
loadAnimation("monkey1.png", "monkey2.png", "monkey3.png", "monkey4.png", "monkey5.png", "monkey6.png", "monkey7.png", "monkey8.png", "monkey9.png", "monkey10.png")
  monkey_collided = loadImage("cloud.png");
  Food1 = loadImage("Banana1.png");
  Food2 = loadImage("Banana2.png");
  Food3 = loadImage("Banana3.png");
  Food4 = loadImage("Banana4.png");
  Food5 = loadImage("Banana5.png");
  Food6 = loadImage("Banana6.png");
  groundImage = loadImage("ground.jpg");
}

function setup() {
  createCanvas(600,300);
  
  monkey = createSprite(50, 180, 20, 50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.5;
  
  ground = createSprite(200, 180, 400, 20);
  ground.addImage("ground", groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200, 194, 400, 10);
  invisibleGround.visible = false;
  
  junglegroup = new Group();
  foodgroup = new Group();
}

function draw(){
 background(255);
  
  if(keyDown("space")) {
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  monkey.collide(invisibleGround);
  drawSprites();
  
  spawnJungle(); 
  spawnFoods();
}

function spawnJungle() {
  //write code here to spawn the jungle
  if (frameCount % 60 === 0) {
    var Jungle = createSprite(600,120,40,10);
    jungle.y = random(80,120);
    jungle.addImage("jungle.jpg", jungleImage);
    jungle.scale = 0.5;
    jungle.velocityX = -3;
    
     //assign lifetime to the variable
    jungle.lifetime = 300;
    
    //adjust the depth
    monkey.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    junglegroup.add("jungle.jps");
  }
}

function spawnFood() {
  if(frameCount % 60 === 0) {
    var food = createSprite(600,165,10,40);
    food.velocityX = -2;
    
    //generate random obstacles
    var rand = Math.round (random(1,6));
    switch(rand) {
    case 1: food.addImage("Banana1.png");
    break
    case 2: food.addImage("Banana2.png");
    break
    case 3: food.addImage("Banana3.png");
    break
    case 4: food.addImage("Banana4.png");
    break
    case 5: food.addImage("Banana5.png");
    break
    case 6: food.addImage("Banana6.png");
    break
    }
    //assign scale and lifetime to the obstacle           
    food.scale = 0.5;
    food.lifetime = 300;
    foodgroup.add ("banana.png");
  }
}