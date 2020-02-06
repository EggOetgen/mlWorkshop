const socket = io();

let x = 0;
let y = 0;
let r = 255;
let g = 255;
let b = 255;
let rad = 20;

socket.on("/test", (data) =>{

console.log(data)
x = data.x * width
y = data.y * height

r = data.r * 255;
g = data.g * 255;
b = data.b * 255;

rad = (data.rad * 80) + 20;

});

function setup() {
    createCanvas(400, 400);
    noStroke()
    background(250, 250, 240);

  }
  
  function draw() {
    background(x, y, 240);

    fill(y,b,g);
    ellipse(width /2, height*0.7, rad*2,rad*2)
    fill(0);
    ellipse(width /2, height*0.7, rad,rad)

    fill(x, y, 240);
    rect(width*0.25, 0, width*0.5, height * 0.7)

    fill(r,g,b);
    ellipse(width*0.25, height/2, rad,rad)
    ellipse(width*0.75, height/2, rad,rad)

    fill(g,b,r);

    ellipse(width*0.25, height/2, rad/2,rad/2)
    ellipse(width * 0.75, height/2, rad/2,rad/2)

    
  }