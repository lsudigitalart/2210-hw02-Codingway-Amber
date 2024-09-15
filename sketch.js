function setup() {
    createCanvas(400,269);
    // angleMode(DEGREES);

}

function draw() {
    background(100);
    fill(255, 0, 0); 
   
    // mouse position
    text(mouseX, 0, 200); 
    text(mouseY, 0, 220); 

    // circle
    noStroke();
    // rotate(40);
    // fill(221, 176, 26);
    // ellipse (12, 20, 50, 100);

    // line 1
    strokeWeight(15);
    stroke(0);
    noFill();
    curve(0, 0, 8, 0, 0, 19, 10, 8)
    
    // line 2
    strokeWeight(15);
    stroke(0);
    noFill();
    curve(40, 150, 50, 0, 0, 106, 110, 0)

    // line 3
    strokeWeight(7);
    stroke(0);
    noFill();
    curve(193, 134, 90, 0, 22, 120, 92, 71)

    // line 4
    strokeWeight(7);
    stroke(0);
    noFill();
    curve(165, 134, 102, 0, 35, 135, 92, 140)

    // line 5
    strokeWeight(7);
    stroke(0);
    noFill();
    curve(135, 134, 115, 0, 50, 140, 92, 280)

    // line 6
    strokeWeight(7);
    stroke(0);
    noFill();
    curve(105, 134, 125, 0, 65, 155, 92, 400)

    // line 7
    strokeWeight(10);
    stroke(0);
    noFill();
    curve(300, 134, 142, 0, 80, 268, 300, 300)

}