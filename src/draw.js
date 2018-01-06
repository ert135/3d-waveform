let size = 800;
let angle = 0.01;
let barWidth = 20;
let isometricAngle;
let maxD;
let w = 20;

let setup = function() {
    createCanvas(size, size, WEBGL);
    isometricAngle = atan(1 / sqrt(2));
    maxD = dist(0, 0, 200, 200);
}

let draw = function() {
    background(255);
    ortho(-500, 500, 500, -500, 0, 1200);

    rotateX(-isometricAngle);
    rotateY(-QUARTER_PI);

    for (let z = 0; z < height; z += w) {
      for (let x = 0; x < width; x += w) {
        push();
            let distanceFromCenter = dist(x, z, width / 2, height / 2);
            let offset = map(distanceFromCenter, 0, maxD, -1, 1)
            let a = angle + offset;
            let h = floor(map(sin(a), -1, 1, 100, 300));
            translate(x - width / 2, 0, z - height / 2);
            normalMaterial();
            box(w - 2, h, w - 2);
        pop();
      }
    }
  
    angle -= 0.1;
}

window.setup = setup;
window.draw = draw;