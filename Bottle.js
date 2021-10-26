be = "";

status = "";

objects = [];

function preload() {

be = loadImage("Bottle.jpg");

}

function setup() {

canvas = createCanvas(640, 420);

canvas.position(500, 250);

ObjectDetector = ml5.objectDetector("cocossd", modelLoaded);

document.getElementById("status").innerHTML = "Status : Object Detecting";
    
}

function draw() {

if(status != undefined) {

image(be, 0, 0, 640, 420);

for(var i = 0; i < objects.length; i++) {

document.getElementById("status").innerHTML = "Status : Object Detected";

fill("red");

percent = floor(objects[i].confidence * 100);

text(objects[i].label + " " + percent + "%", objects[i].x - 160, objects[i].y - 200);

noFill();

stroke("red");

rect(objects[i].x - 170, objects[i].y - 40, objects[i].width - 500, objects[i].height - 700);

}

}
    
}

function Back() {

window.location = "index.html";
    
}
    
function modelLoaded() {

console.log("Model Loaded");
    
status = true;
    
ObjectDetector.detect(be, gotresults);
    
}
    
function gotresults(error, results) {
    
if(error) {
    
console.log(error);
    
}
    
console.log(results);

objects = results;
    
}
        
function gotresults(error, results) {
        
if(error) {
        
console.log(error);
        
}
        
console.log(results);
    
objects = results;
        
}