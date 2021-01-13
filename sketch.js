const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, stand;
var box8, box9, box10, box11, box12, box13, box14, box15, box16;
var polygon;

function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);
    imageMode(CENTER);
    image(polygon_img, polygon.position.x, polygon.position.y, 40, 40); 

    ground = new Ground(600,height,1200,20);
    stand = new Ground(400,height,1200,20);

    box8 = new Box(330,235,30,40);
    box9 = new Box(360,235,30,40);
    box10 = new Box(390,235,30,40);
    box11 = new Box(420,235,30,40);
    box12 = new Box(450,235,30,40);
    box13 = new Box(360,195,30,40);
    box14 = new Box(390,195,30,40);
    box15 = new Box(420,195,30,40);
    box16 = new Box(390,155,30,40);

    slingshot = new SlingShot(this.polygon,{x:200, y:50});
}

function draw(){
    engine.update(engine);

    slingshot.display();

    ground.display();
    stand.display();

    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display(); 
    
    polygon.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}