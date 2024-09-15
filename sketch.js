function setup() {
    createCanvas(400,269);
    // angleMode(DEGREES);

}

function draw() {
    background(246, 200, 29);
   
    // mouse position
    fill(255, 0, 0); 
    strokeWeight(5);
    stroke(0);
    text(mouseX, 0, 200); 
    text(mouseY, 0, 220); 

    // circle
    // noStroke();
    // rotate(40);
    // fill(221, 176, 26);
    // ellipse (12, 20, 50, 100);

    // line 1
    strokeWeight(15);
    stroke(0);
    noFill();
    curve(0, 0, 8, 0, 0, 19, 10, 8);
    
    // line 2
    strokeWeight(15);
    stroke(0);
    noFill();
    curve(40, 150, 50, 0, 0, 106, 110, 0);

    // line 3
    strokeWeight(7);
    stroke(0);
    noFill();
    curve(193, 134, 90, 0, 22, 120, 92, 71);

    // line 4
    strokeWeight(7);
    stroke(0);
    noFill();
    curve(165, 134, 102, 0, 35, 135, 92, 140);

    // line 5
    strokeWeight(7);
    stroke(0);
    noFill();
    curve(135, 134, 115, 0, 50, 140, 92, 280);

    // line 6
    strokeWeight(7);
    stroke(0);
    noFill();
    curve(105, 134, 125, 0, 65, 155, 92, 400);

    // line 7
    strokeWeight(10);
    stroke(0);
    noFill();
    curve(300, 134, 142, 0, 80, 268, 300, 300);

    // line 8
    strokeWeight(14);
    stroke(0);
    noFill();
    curve(507, 17, 194, 0, 194, 268, 400, 300);

    // line 9
    strokeWeight(20);
    stroke(0);
    noFill();
    curve(354, 0, 210, 0, 169, 182, 200, 400);

    // line 10
    strokeWeight(12); 
    stroke(0); 
    noFill();
    curve(200, 0, 172, 185, 194, 281, 115, 150);

    // line 6
    strokeWeight(5);
    stroke(0);
    noFill();
    curve(105, 134, 250, 0, 202, 100, 150, 700); 

    // skin
    noStroke();
    // rotate(40);
    fill(246, 228, 216);
    ellipse (397, 141, 150, 300);
}