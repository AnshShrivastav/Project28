
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var binImage,bin
var launcher1

function preload()
{
	binImage=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bin=createSprite(500,610,50,50);
	bin.density=90
	bin.addImage(binImage);
	bin.scale=0.49;

	dustbin= new Dustbin(200,200,50,50)

	ground= new Ground(420,690,860,50);
    paper= new Paper(100,620,18);


	//dustbin1=new Dustbin(470,670,20,120);
	//dustbin2=new Dustbin(550,680,20,120);
	//dustbin3=new Dustbin(480,670,110,12);

    launcher1= new Launcher(paper.body,{x:80,y:250});
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  ground.display();  
  
 // dustbin1.display();
  //dustbin2.display();
  //dustbin3.display();
  paper.display(); 
  launcher1.display();
  dustbin.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:13,y:-13})
	}
}
function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}
 
function mouseReleased(){
	launcher1.fly();
}
