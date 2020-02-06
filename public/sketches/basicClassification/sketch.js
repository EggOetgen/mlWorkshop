const socket = io();

let x = 0;
let y = 0;
let r = 255;
let g = 255;
let b = 255;
let rad = 20;

socket.on("/test", (data) =>{

// console.log(data)
x = data.x
y = data.y * height

r = data.r * 255;
g = data.g * 255;
b = data.b * 255;

rad = (data.rad * 80) + 20;

});

let capture;
let c;
function setup() {
    createCanvas(400, 400);
    capture = createCapture(VIDEO);
    capture.hide();
    noFill();
    stroke(255, 0, 0);
    strokeWeight(3);
  }
  
  function draw() {
    background(255);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    image(capture, 0, 0, width, 350);

  noStroke()
    c = get(100,200,50,50)
    stroke(255, 0, 0);
    rect( 100, 200,50,50)


    image(c, 0, 350);
    // console.log(c.pixels)

    if (keyIsPressed){
      c.loadPixels()
      socket.emit('massive', { 
      pix : c.pixels
  
    });
    
    }
    stroke(0);
    strokeWeight(1);
    fill(0);
    text("My prediction is class :"  + x , 60, 375)
  }
  


