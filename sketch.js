function setup() {
    createCanvas(400,269);
    // angleMode(DEGREES);

}

function draw() {
    background(100);
    fill(255, 0, 0); 
   
    // mouse position
    text(mouseX, 0, 100); 
    text(mouseY, 0, 120); 

    noStroke();
    // rotate(40);
    fill(221, 176, 26);
    ellipse (12, 20, 50, 100);
    // quad(0, 65, 12, 65, width, height, 0, height);

    // line 1
    strokeWeight(15);
    stroke(0);
    noFill();
    curve(mouseX, mouseY, 8, 0, 0, 15, mouseX, mouseY)
    
    // line 2
    // strokeWeight(15);
    // stroke(0);
    // noFill();
    // curve(100, 10, 6, 0, 0, 100, 92, 71)

    // line
    strokeWeight(5);
    stroke(0);
    noFill();
    curve(193, 134, 105, 0, 43, 182, 92, 71)

}