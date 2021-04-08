const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world
var ground, ball
var dustbinImage, dustbin

function preload(){
	dustbinImage = loadImage ("Images/dustbingreen.png")
}

function setup() {
	createCanvas(1200,600);

	engine = Engine.create();
	world = engine.world;

ground = new Ground()
ball = new Paper()

dustbin = createSprite(964,520,20,20)
dustbin.addImage(dustbinImage)
dustbin.scale = 0.45

dustbinPart1 = new Dustbin(902,505,10,120)
dustbinPart2 = new Dustbin(962,565,130,10)
dustbinPart3 = new Dustbin(1024,505,10,120)

  
}


function draw() {
  background("0");
  Engine.update(engine); 
  
  ground.display();
  ball.display();
  dustbinPart1.display();
  dustbinPart2.display()
  dustbinPart3.display()
  
drawSprites()
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position)
	}
}