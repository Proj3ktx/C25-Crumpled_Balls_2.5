var box1, box2, box3;
var ball, ground;
var binImg;
var bin;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	binImg = loadImage("images/dustbingreen.png");
}

function setup() {
	createCanvas(800, 400);

	bin = createSprite(600, 260, 200, 200);

	engine = Engine.create();
	world = engine.world;


	ball = new Paper(50, 350, 70);

	box1 = new Dustbin(600, 370, 160, 20);
	box2 = new Dustbin(510, 330, 20, 100);
	box3 = new Dustbin(690, 330, 20, 100);

	bin.addImage(binImg);
	bin.scale = 0.7;

	ground = new Ground(400, 390, 800, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  


  ground.display();

  box1.display();
  box2.display();
  box3.display();

  drawSprites();

  ball.display();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(ball.body, ball.body.position, {x:130, y:-200});
	}
}

