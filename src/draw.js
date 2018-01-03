let size = 800;
let angle = 0.01;

let setup = function() {
    createCanvas(size, size, WEBGL);
}

let draw = function() {
    background(175);
    pointLight(255, 0, 0, -200, 0, 0);
    pointLight(0, 0, 255, 0, 200, 0);

    push();
    rotateX(angle);
    rotateY(angle * 0.3);
    rotateZ(angle);

    ambientMaterial(255);
    noStroke();
    box(200)
    pop()

    translate(0, 300);
    rotateX(HALF_PI);

    ambientMaterial(255);
    plane(600, 600);

    angle += 0.003;
}

window.setup = setup;
window.draw = draw;