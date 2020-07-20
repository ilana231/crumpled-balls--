var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
//var ball
var paper
var ground
var platform,platform2,platform3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//var ball_options ={
		//isStatic: false,
		//restitution: 0.3,
		//friction: 0.5,
		//density: 1.2
	//}
	
	var ground_options ={
        isStatic: true
    }

	ground = Bodies.rectangle(400,690,800,30,ground_options);
    World.add(world,ground);

	//ball = Bodies.circle(100,640,10,ball_options);
	//World.add(world,ball);

	platform = new Platform(600,640,200,20);
	platform2 = new Platform(500,600,20,100);
	platform3 = new Platform(700,600,20,100);

	paper = new Paper(200,200);

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('white');

 rectMode(CENTER);
 rect(ground.position.x,ground.position.y,800,100);

  //ellipseMode(RADIUS);
  //ellipse(ball.position.x,ball.position.y,20,20);

  platform.display();
  platform2.display();
  platform3.display();

  paper.display();

  
  
  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
		
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:250,y:-500});
	}
}

