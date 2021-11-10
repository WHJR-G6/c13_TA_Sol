function setup() {
  createCanvas(500, 500);
 //bg = createSprite(250,250,500,500);
  //bg.addImage(bgImg)
  //bg.scale =0.2;
  player = createSprite(250,300,20,50);
  player.addImage("player",jack_image)

  platform = createSprite(250,350,100,10);
  platform.addImage("platform", platform3)
  platform.scale=0.1;
 platformGroups = new Group(); 
}

function draw() {
  background(0);

  //calculate and display score
    score = Math.round(frameCount/10);

  // printing score
  
    
  if(keyDown("up"))
  {
    player.velocityY=-10
    //jumpSound1.play()
  }

  if(keyDown("left"))
  {
    player.x = player.x - 7;
    //leftSound.play()
  }


  player.velocityY = player.velocityY +0.8;

  player.collide(platform);
  
  
  player.collide(platformGroups);
  
  
  spawnPlatform();

  drawSprites();
  textSize(20);
  fill(255);
  text("Score " + score , 350,50);
}

function spawnPlatform(){
  if(frameCount % 40 ===0){
  
    platform.destroy();
   
    var platforms = createSprite(250,0,50,50);
  platforms.velocityY = 5;

  var r = Math.round(random(1,6))
  switch (r){
    case 1 : platforms.addImage(platform1);
    break;
    case 2 : platforms.addImage(platform2);
    break;
    case 3 : platforms.addImage(platform3);
    break;
    case 4 : platforms.addImage(platform4);
    break;
    case 5 : platforms.addImage(platform5);
    break;
    case 6 : platforms.addImage(platform6);
    break;
  }
 
  platforms.scale = 0.1;

  platformGroups.add(platforms);

  platforms.x = random(0,500);
  }
}
