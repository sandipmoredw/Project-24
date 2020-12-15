
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,paper1;
var dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(1350, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground1 = new Ground(650,640,1350,7);
	paper1 = new Paper(50,635,50,50);
	dustbin1 = new Dustbin(1300,570,30,130);
	dustbin2 = new Dustbin(1210,620,150,30);
	dustbin3 = new Dustbin(1120,570,30,130);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	keyPressed();

  drawSprites();

  ground1.display();
  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:5,y:-5});
	}
		
		
}



