let x = 0;

function setup() {
  let c = createCanvas(400, 200);
  c.parent("p5-container");
}

function draw() {
  background(20);
  fill(255);
  ellipse(x, 100, 40, 40);
  x = (x + 2) % width;
}
