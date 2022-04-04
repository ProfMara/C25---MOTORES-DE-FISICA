
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var botao;
var engine, world;

var angle=60;
var h1, h2, h3, h4;

function setup() {
  createCanvas(800,600);

  engine = Engine.create();
  world = engine.world;
  
   var quicando = {
    restitution: 0.35,
    frictionAir:0.01
  }
  

   botao = createImg('up.png');
   botao.position(730,30);
   botao.size(50,50);
   botao.mouseClicked(vForce);


  bola = Bodies.circle(100,10,30,quicando);
  World.add(world,bola);
  

  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background("cyan");
  Engine.update(engine);
  
 
  fill("red")
  ellipse(bola.position.x,bola.position.y,30);
  

}

function vForce()
{
  Matter.Body.applyForce(bola,{x:0,y:0},{x:0,y:-0.05});
}
  