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
  }
  
  function draw() {
    background(220);
    fill(r,g,b);
    ellipse(x, y, rad,rad)
  }