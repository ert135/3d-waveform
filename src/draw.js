let size = 800;
let angle = 0.01;
let barWidth = 50;

let setup = function() {
    createCanvas(size, size, WEBGL);
}

let draw = function() {
    background(176);
    // ortho()

    translate(0, 50, -50);
    rotateX(PI / 8);

    rectMode(CENTER);

    let offset = 0;
    for (let x = 0; x < width; x += barWidth) {
        push();
            let a = angle + offset;
            let h = map(sin(a), -1, 1, 0, 100);

            fill(255);
            stroke(0);
            translate(x - width / 2 + barWidth/2, 0, 0);

            normalMaterial();
            box(barWidth, h, barWidth);

            offset += 0.1;
        pop();
    }

    angle += 0.1;
}

window.setup = setup;
window.draw = draw;