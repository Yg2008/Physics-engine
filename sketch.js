const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(displayWidth/2,displayHeight-10,displayWidth,20,ground_options);
    World.add(world,ground);

    var ballprop ={
        restitution: 0.5
    }
    ball =  Bodies.circle(displayWidth/2,displayHeight/2,50,ballprop);
    World.add(world,ball);

    console.log(ground);
}

function draw(){
    background("lightblue");
    Engine.update(engine);
    rectMode(CENTER);
    strokeWeight(5);
    stroke("green");
    fill("green");
    rect(ground.position.x,ground.position.y,displayWidth,20);

    ellipseMode(RADIUS);
    strokeWeight(5);
    stroke("black");
    fill("red")
    ellipse(ball.position.x,ball.position.y,50,50);
    

}